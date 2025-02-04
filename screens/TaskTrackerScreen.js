import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles';

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
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Task Tracker</Text>
            <View style={globalStyles.inputContainer}>
                <TextInput
                    style={globalStyles.input}
                    placeholder="Enter a task"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity
                    style={globalStyles.button}
                    title="Add Task"
                    onPress={addTask}
                >
                    <Text style={globalStyles.buttonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => toggleCompletion(index)}
                        style={globalStyles.taskContainer}
                    >
                        <View
                            style={[
                                globalStyles.taskContent,
                                item.completed && globalStyles.taskCompleted,
                            ]}
                        >
                            <Text
                                style={[
                                    globalStyles.taskText,
                                    item.completed &&
                                        globalStyles.taskTextCompleted,
                                ]}
                            >
                                {item.task}
                            </Text>
                            <TouchableOpacity
                                onPress={() => deleteTask(index)}
                                style={globalStyles.deleteButton}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={24}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
};

export default TaskTrackerScreen;
