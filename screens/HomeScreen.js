import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { globalStyles } from '../styles';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>
                Welcome to the Dishwashing Efficiency App
            </Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('TaskTracker')}
            >
                <FontAwesome
                    name="tasks"
                    size={24}
                    color="white"
                    style={globalStyles.icon}
                />
                <Text style={globalStyles.buttonText}>Task Tracker</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('TimerReminders')}
            >
                <FontAwesome
                    name="clock-o"
                    size={24}
                    color="white"
                    style={globalStyles.icon}
                />
                <Text style={globalStyles.buttonText}>Timer & Reminders</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('EfficientWorkflowGuide')}
            >
                <FontAwesome
                    name="list-ul"
                    size={24}
                    color="white"
                    style={globalStyles.icon}
                />
                <Text style={globalStyles.buttonText}>
                    Efficient Workflow Guide
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('MusicAndMotivation')}
            >
                <FontAwesome
                    name="music"
                    size={24}
                    color="white"
                    style={globalStyles.icon}
                />
                <Text style={globalStyles.buttonText}>
                    Music And Motivation
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('CleaningTips')}
            >
                <FontAwesome
                    name="lightbulb-o"
                    size={24}
                    color="white"
                    style={globalStyles.icon}
                />
                <Text style={globalStyles.buttonText}>Cleaning Tips</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
