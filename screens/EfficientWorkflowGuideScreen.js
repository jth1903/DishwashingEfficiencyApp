import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const steps = [
    {
        key: '1',
        title: 'Load Dishwasher',
        description: 'Load the dishwasher with dirty dishes.',
    },
    {
        key: '2',
        title: 'Wash Pots and Pans',
        description:
            'Hand wash pots and pans that do not fit in the dishwasher.',
    },
    {
        key: '3',
        title: 'Clean Counters',
        description:
            'Wipe down all kitchen counters with a clean cloth and detergent.',
    },
    // Add more steps as needed
];

const EfficientWorkflowGuideScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Efficient Workflow Guide</Text>
            <FlatList
                data={steps}
                renderItem={({ item }) => (
                    <View style={styles.stepContainer}>
                        <Text style={styles.stepTitle}>{item.title}</Text>
                        <Text style={styles.stepDescription}>
                            {item.description}
                        </Text>
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
    stepContainer: {
        marginBottom: 15,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stepDescription: {
        fontSize: 16,
    },
});

export default EfficientWorkflowGuideScreen;
