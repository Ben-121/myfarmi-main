import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

const DiagnoseScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Picture taken:', photo.uri);

      const base64Image = await convertImageToBase64(photo.uri);

      if (base64Image) {
        makePrediction(base64Image);
      }
    }
  };

  const convertImageToBase64 = async (imageUri) => {
    try {
      const imageBinary = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      return imageBinary;
    } catch (error) {
      console.error('Error converting image to base64:', error);
      return null;
    }
  };

  const makePrediction = async (base64Image) => {
    console.log(base64Image)
    const apiUrl = 'https://my-flask-app-saikartikbalivada-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/predict_image?image_blob='+base64Image;
    //console.log(encodedImage);

    try {
      const response = await fetch(fullApiUrl, {
        method: 'GET',
          // Add any other headers if needed
        },
        //body: JSON.stringify({ maxBodyLength: 3000000000000000 }),
      );

      const data = response.text;
      console.log('API response:', data);

      // Process the API response as needed

    } catch (error) {
      console.error('Error sending image to API:', error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    color: 'white',
  },
});

export default DiagnoseScreen;
