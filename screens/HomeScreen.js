import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to Dishwashing Efficiency App
            </Text>
            <Button
                title="Go to Task Tracker"
                onPress={() => navigation.navigate('TaskTracker')}
            />
            <Button
                title="Go to Timer & Reminders"
                onPress={() => navigation.navigate('TimerReminders')}
            />
            <Button
                title="Go to Efficient Workflow Guide"
                onPress={() => navigation.navigate('EfficientWorkflowGuide')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default HomeScreen;
