import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TaskTrackerScreen from '../screens/TaskTrackerScreen';
import TimerRemindersScreen from '../screens/TimerReminderScreen';
import EfficientWorkflowGuideScreen from '../screens/EfficientWorkflowGuideScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="TaskTracker"
                    component={TaskTrackerScreen}
                />
                <Stack.Screen
                    name="TimerReminders"
                    component={TimerRemindersScreen}
                />
                <Stack.Screen
                    name="EfficientWorkflowGuide"
                    component={EfficientWorkflowGuideScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
