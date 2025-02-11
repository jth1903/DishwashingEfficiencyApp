import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles';

const CleaningTipsScreen = () => {
    const cleaningTips = [
        {
            id: '1',
            title: 'Tip 1: Use Vinegar for Stains',
            description:
                'Vinegar is a natural cleaner that can help remove stains from various surfaces.',
        },
        {
            id: '2',
            title: 'Tip 2: Baking Soda for Odors',
            description:
                'Baking soda is great for neutralizing odors in carpets and upholstery.',
        },
        {
            id: '3',
            title: 'Tip 3: Lemon Juice for Shine',
            description:
                'Lemon juice can be used to add shine to metal surfaces and cut through grease.',
        },
        {
            id: '4',
            title: 'Tip 4: Olive Oil for Furniture',
            description:
                'Olive oil can be used to polish wooden furniture and keep it looking new.',
        },
        {
            id: '5',
            title: 'Tip 5: Essential Oils for Freshness',
            description:
                'Add a few drops of essential oils to your cleaning solutions for a pleasant scent.',
        },
        {
            id: '6',
            title: 'Tip 6: Cornstarch for Windows',
            description:
                'Cornstarch can be used to clean windows and make them streak-free.',
        },
        {
            id: '7',
            title: 'Tip 7: Hydrogen Peroxide for Disinfecting',
            description:
                'Hydrogen peroxide is a powerful disinfectant that can kill germs and bacteria.',
        },
        {
            id: '8',
            title: 'Tip 8: Dish Soap for Grease',
            description:
                'Dish soap is effective in cutting through grease on dishes and surfaces.',
        },
    ];

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cleaning Tips</Text>
            <FlatList
                data={cleaningTips}
                keyExtractor={(item) => item.id}
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

export default CleaningTipsScreen;
