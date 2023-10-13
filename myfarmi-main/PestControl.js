import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const ApiDataPage = () => {
  const [nitrogen, setNitrogen] = useState('');
  const [potassium, setPotassium] = useState('');
  const [phosphorous, setPhosphorous] = useState('');
  const [result, setResult] = useState('');

  const apiUrl = 'https://my-flask-app-saikartikbalivada-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/predict';

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          nitrogen,
          potassium,
          phosphorous,
        },
      });

      setResult(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('Error fetching data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Data Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Nitrogen"
        value={nitrogen}
        onChangeText={setNitrogen}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Potassium"
        value={potassium}
        onChangeText={setPotassium}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Phosphorous"
        value={phosphorous}
        onChangeText={setPhosphorous}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text style={styles.buttonText}>Fetch Data</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 16,
  },
});

export default ApiDataPage;
