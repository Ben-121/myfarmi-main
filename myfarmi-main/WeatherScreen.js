import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Easing } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [weather, setWeather] = useState({
    IsDayTime: true, // Placeholder value for day/night
    Temperature: {
      Metric: { Value: 25 }, // Placeholder temperature value
    },
    WeatherIcon: 1, // Placeholder weather icon code
  });
  const [cropAdvice] = useState("Consider watering your crops today."); // Placeholder crop advice
  const rotateAnimatedValue = new Animated.Value(0);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    startRotationAnimation();
    setGreeting(getGreeting());
  }, []);

  const startRotationAnimation = () => {
    rotateAnimatedValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotateInterpolate = rotateAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const getGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2980B9', '#6DD5FA']} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{greeting}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.weatherMain}>
            <View style={styles.weatherIconContainer}>
              <Animated.View style={[styles.weatherIconContainer, { transform: [{ rotate: rotateInterpolate }] }]}>
                <MaterialCommunityIcons name="weather-sunny" size={64} color="yellow" />
              </Animated.View>
            </View>
            <Text style={styles.temperature}>{weather?.Temperature?.Metric?.Value}°C</Text>
            <Text style={styles.description}>Clear Sky</Text>
          </View>
          <CropAdvisor cropAdvice={cropAdvice} />
          {/* Other features like hourly and daily forecasts, community interaction, etc. */}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const CropAdvisor = ({ cropAdvice }) => {
  return (
    <View style={styles.cropAdvisor}>
      <Text style={styles.cropAdvisorTitle}>Personalized Crop Advisory</Text>
      <Text style={styles.cropAdviceText}>{cropAdvice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  weatherMain: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingVertical: 20,
  },
  weatherIconContainer: {
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  cropAdvisor: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  cropAdvisorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  cropAdviceText: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
