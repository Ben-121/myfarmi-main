import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const VideoBlogPage = () => {
    const videoId = 'BouMFj9acX0';

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                style={styles.video}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Farm Basics #1161 Soil pH and Nutrient Availability (Air Date 7-5-2020)</Text>
                <Text style={styles.description}>Know more about Soild pH and Nutrient Availability for your</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    video: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    content: {
        padding: 16,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
    },
});

export default VideoBlogPage;