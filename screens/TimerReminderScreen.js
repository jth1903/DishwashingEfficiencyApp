import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { globalStyles } from '../styles';

const TimerRemindersScreen = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [reminder, setReminder] = useState('');
    const [reminders, setReminders] = useState([]);

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

    const addReminder = () => {
        if (reminder) {
            setReminders([
                ...reminders,
                { key: `${reminders.length}`, reminder },
            ]);
            setReminder('');
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Timer & Reminders</Text>
            <Text style={globalStyles.timer}>{timer}s</Text>
            <TouchableOpacity
                style={globalStyles.button}
                title={isRunning ? 'Stop' : 'Start'}
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
                title="Add Reminder"
                onPress={addReminder}
            >
                <Text style={globalStyles.buttonText}>Add Reminder</Text>
            </TouchableOpacity>
            <FlatList
                data={reminders}
                renderItem={({ item }) => (
                    <View style={globalStyles.reminderContainer}>
                        <Text style={globalStyles.reminder}>
                            {item.reminder}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default TimerRemindersScreen;
