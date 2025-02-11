import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';

// Set the handler for incoming notifications
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const TimerRemindersScreen = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [reminder, setReminder] = useState('');
    const [reminderTime, setReminderTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        loadReminders();
        requestNotificationPermissions();
    }, []);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timer]);

    const requestNotificationPermissions = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('You need to enable notifications in your settings.');
        }
    };

    const loadReminders = async () => {
        try {
            const savedReminders = await AsyncStorage.getItem('reminders');
            if (savedReminders) {
                setReminders(JSON.parse(savedReminders));
            }
        } catch (error) {
            console.error('Failed to load reminders:', error);
        }
    };

    const saveReminders = async (newReminders) => {
        try {
            await AsyncStorage.setItem(
                'reminders',
                JSON.stringify(newReminders)
            );
        } catch (error) {
            console.error('Failed to save reminders:', error);
        }
    };

    const addReminder = () => {
        if (reminder) {
            const newReminders = [
                ...reminders,
                { key: `${reminders.length}`, reminder, time: reminderTime },
            ];
            setReminders(newReminders);
            setReminder('');
            saveReminders(newReminders);
            scheduleNotification(reminder, reminderTime);
        }
    };

    const removeReminder = (index) => {
        const newReminders = reminders.filter((_, idx) => idx !== index);
        setReminders(newReminders);
        saveReminders(newReminders);
    };

    const scheduleNotification = async (reminder, time) => {
        const trigger = {
            type: 'date',
            timestamp: time.getTime(),
        };
        console.log('Scheduling notification:', reminder, trigger);
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Reminder',
                body: reminder,
            },
            trigger,
        });
    };

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimer(0);
    };

    const onTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || reminderTime;
        setShowTimePicker(Platform.OS === 'ios');
        setReminderTime(currentTime);
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Timer & Reminders</Text>
            <Text style={globalStyles.timer}>{timer}s</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={isRunning ? stopTimer : startTimer}
            >
                <Text style={globalStyles.buttonText}>
                    {isRunning ? 'Stop' : 'Start'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                title="Reset"
                onPress={resetTimer}
            >
                <Text style={globalStyles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TextInput
                style={globalStyles.input}
                placeholder="Set a reminder"
                value={reminder}
                onChangeText={setReminder}
            />
            <TouchableOpacity
                style={globalStyles.button}
                title="Pick Time"
                onPress={() => setShowTimePicker(true)}
            >
                <Text style={globalStyles.buttonText}>Pick Time</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={reminderTime}
                    mode="time"
                    display="default"
                    onChange={onTimeChange}
                />
            )}
            <TouchableOpacity
                style={globalStyles.button}
                title="Add Reminder"
                onPress={addReminder}
            >
                <Text style={globalStyles.buttonText}>Add Reminder</Text>
            </TouchableOpacity>
            <FlatList
                data={reminders}
                renderItem={({ item, index }) => (
                    <View style={globalStyles.taskContainer}>
                        <View style={globalStyles.taskContent}>
                            <Text style={globalStyles.taskText}>
                                {item.reminder} at{' '}
                                {new Date(item.time).toLocaleTimeString()}
                            </Text>
                            <TouchableOpacity
                                onPress={() => removeReminder(index)}
                                style={globalStyles.deleteButton}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={24}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

export default TimerRemindersScreen;
