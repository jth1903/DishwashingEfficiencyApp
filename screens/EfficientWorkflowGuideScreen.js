import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const steps = [
    {
        key: '1',
        title: 'Spray Debri From Dishes',
        description:
            'Clean all excess from plates before placing in dish washer.',
    },
    {
        key: '2',
        title: 'Load Dishwasher',
        description: 'Load sprayed dishes into the dishwasher.',
    },
    {
        key: '3',
        title: 'Stack And Sort Dishes',
        description:
            'Stack and sort the dishes on the back table before stocking.',
    },
    {
        key: '4',
        title: 'Stock Plates',
        description: 'Stock the kitchen with clean plates.',
    },
    {
        key: '5',
        title: 'Spray/Clean Pots And Pans',
        description:
            'Clean or spray pots and pans either placing them in the washer or using the 3 part sink.',
    },
    {
        key: '6',
        title: 'Stock Pots And Pans',
        description:
            'Remove Pots and pans from sanitizer and let air dry, after drying stock on the rack.',
    },
    {
        key: '7',
        title: 'Sort And Rinse Silverware',
        description:
            'Sort silverware acording to type, rense while placing in rack for second wash.',
    },
    // Add more steps as needed
];

const EfficientWorkflowGuideScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Efficient Workflow Guide</Text>
            <FlatList
                data={steps}
                renderItem={({ item }) => (
                    <TouchableOpacity style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>
                            {item.title}
                        </Text>
                        <Text style={globalStyles.buttonText}>
                            {item.description}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default EfficientWorkflowGuideScreen;
