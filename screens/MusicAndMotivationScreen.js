import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    Alert,
    Linking,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import globalStyles from '../styles'; // Import global styles

const MusicAndMotivationScreen = () => {
    const [quote, setQuote] = useState('');
    const [spotifyUrl] = useState('https://open.spotify.com/');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async (retries = 3) => {
        try {
            const response = await axios.get(
                'https://api.forismatic.com/api/1.0/',
                {
                    params: {
                        method: 'getQuote',
                        format: 'json',
                        lang: 'en',
                    },
                    timeout: 5000,
                }
            );
            setQuote(response.data.quoteText);
        } catch (error) {
            console.error('Error fetching quote:', error);
            if (error.response) {
                console.error('Response error:', error.response.data);
            } else if (response.data.quoteText === undefined) {
                setQuote(response.data.quoteText);
            } else if (error.request) {
                console.error('Request error:', error.request);
            } else {
                console.error('General error:', error.message);
            }
            if (retries > 0) {
                console.warn(`Retrying... (${3 - retries + 1})`);
                fetchQuote(retries - 1);
            } else {
                console.error('Failed to fetch quote after retries.');
                setQuote(
                    'Failed to fetch quote. Please check your internet connection.'
                );
            }
        }
    };

    const checkInternetConnection = async () => {
        const state = await NetInfo.fetch();
        if (!state.isConnected) {
            Alert.alert(
                'No Internet Connection',
                'Please check your internet connection and try again.'
            );
        } else {
            fetchQuote();
        }
    };

    const openSpotify = () => {
        Linking.openURL(spotifyUrl).catch((err) =>
            console.error('Failed to open URL:', err)
        );
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.quote}>{quote}</Text>
            <TouchableOpacity
                style={globalStyles.button}
                title="Open Spotify"
                onPress={openSpotify}
            >
                <Text style={globalStyles.buttonText}>Open Spotify</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={globalStyles.button}
                title="Refresh Quote"
                onPress={checkInternetConnection}
            >
                <Text style={globalStyles.buttonText}>Refresh Quote</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MusicAndMotivationScreen;
