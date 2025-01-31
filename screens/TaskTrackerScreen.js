import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const TaskTrackerScreen = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            setTasks([
                ...tasks,
                { key: `${tasks.length}`, task, completed: false },
            ]);
            setTask('');
        }
    };

    const toggleCompletion = (index) => {
        const newTasks = tasks.map((item, idx) =>
            idx === index ? { ...item, completed: !item.completed } : item
        );
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(newTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Task Tracker</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter a task"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add Task" onPress={addTask} />
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                    <View style={styles.taskContainer}>
                        <TouchableOpacity
                            onPress={() => toggleCompletion(index)}
                        >
                            <Text
                                style={
                                    item.completed
                                        ? styles.completedTask
                                        : styles.task
                                }
                            >
                                {item.task}
                            </Text>
                        </TouchableOpacity>
                        <Button
                            title="Delete"
                            onPress={() => deleteTask(index)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 8,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    task: {
        fontSize: 18,
    },
    completedTask: {
        fontSize: 18,
        textDecorationLine: 'line-through',
    },
});

export default TaskTrackerScreen;
