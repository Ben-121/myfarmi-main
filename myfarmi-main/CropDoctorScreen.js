import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import the hook
const Stack = createStackNavigator();
const CropDoctorScreen = () => {
  const [showCalendar, setShowCalendar] = useState(false);
    const navigation = useNavigation(); // Use the hook

  const navigateToDiagnoseScreen = () => {
    navigation.navigate('Diagnose');
  };
  const navigateToCropScreen= () => {
    navigation.navigate('Croppp');
  };
  const navigateToPestScreen= () => {
    navigation.navigate('Pestie');
  };
  const toggleCalendar = () => {
    navigation.navigate('Calendar');
  };


 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crop Doctor</Text>

      <Image
        source={{ uri: 'https://www.frost.com/wp-content/uploads/2023/01/GettyImages-479554988-2.jpg' }}
        style={styles.bannerImage}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToDiagnoseScreen}>
          <Text style={styles.buttonText}>Diagnose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToCropScreen}>
          <Text style={styles.buttonText}>Crop Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToPestScreen}>
          <Text style={styles.buttonText}>Pest Control</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCalendar}>
          <Text style={styles.buttonText}>Toggle Calendar</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>

      {showCalendar && (
        <View style={styles.calendarContainer}>
          <Text>Calendar Component Placeholder</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  bannerImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    width: '45%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  calendarContainer: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
});

export default CropDoctorScreen;
