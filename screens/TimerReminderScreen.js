import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
} from 'react-native';

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
        <View style={styles.container}>
            <Text style={styles.title}>Timer & Reminders</Text>
            <Text style={styles.timer}>{timer}s</Text>
            <Button
                title={isRunning ? 'Stop' : 'Start'}
                onPress={isRunning ? stopTimer : startTimer}
            />
            <Button title="Reset" onPress={resetTimer} />
            <TextInput
                style={styles.input}
                placeholder="Set a reminder"
                value={reminder}
                onChangeText={setReminder}
            />
            <Button title="Add Reminder" onPress={addReminder} />
            <FlatList
                data={reminders}
                renderItem={({ item }) => (
                    <View style={styles.reminderContainer}>
                        <Text style={styles.reminder}>{item.reminder}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    timer: {
        fontSize: 48,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
        width: '100%',
    },
    reminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
    },
    reminder: {
        fontSize: 18,
    },
});

export default TimerRemindersScreen;
