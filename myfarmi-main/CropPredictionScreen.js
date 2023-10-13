import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const CropPredictionScreen = () => {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [predictedCrop, setPredictedCrop] = useState('');

  const handlePredictCrop = async () => {
    try {
      const response = await axios.get(
        `https://my-flask-app-saikartikbalivada-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/predict_crop`,
        {
          params: {
            N,
            P,
            K,
            temperature,
            humidity,
            ph,
            rainfall,
          },
        }
      );

      if (response.data && response.data.predicted_crop) {
        setPredictedCrop(response.data.predicted_crop);
      } else {
        Alert.alert('Error', 'Failed to predict crop');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crop Prediction</Text>
      <TextInput
        style={styles.input}
        placeholder="N"
        value={N}
        onChangeText={setN}
      />
      <TextInput
        style={styles.input}
        placeholder="P"
        value={P}
        onChangeText={setP}
      />
      <TextInput
        style={styles.input}
        placeholder="K"
        value={K}
        onChangeText={setK}
      />
      <TextInput
        style={styles.input}
        placeholder="Temperature"
        value={temperature}
        onChangeText={setTemperature}
      />
      <TextInput
        style={styles.input}
        placeholder="Humidity"
        value={humidity}
        onChangeText={setHumidity}
      />
      <TextInput
        style={styles.input}
        placeholder="pH"
        value={ph}
        onChangeText={setPh}
      />
      <TextInput
        style={styles.input}
        placeholder="Rainfall"
        value={rainfall}
        onChangeText={setRainfall}
      />
      <Button title="Predict Crop" onPress={handlePredictCrop} />
      {predictedCrop && (
        <Text style={styles.predictedCrop}>
          Predicted Crop: {predictedCrop}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  predictedCrop: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CropPredictionScreen;
