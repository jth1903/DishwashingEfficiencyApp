import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TaskTrackerScreen from '../screens/TaskTrackerScreen';
import TimerRemindersScreen from '../screens/TimerReminderScreen';
import EfficientWorkflowGuideScreen from '../screens/EfficientWorkflowGuideScreen';
import MusicAndMotivationScreen from '../screens/MusicAndMotivationScreen';
import CleaningTipsScreen from '../screens/CleaningTipsScreen';

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
                <Stack.Screen
                    name="CleaningTips"
                    component={CleaningTipsScreen}
                />
                <Stack.Screen
                    name="MusicAndMotivation"
                    component={MusicAndMotivationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
