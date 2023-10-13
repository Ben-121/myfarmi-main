import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CameraInputScreen = () => {
  const route = useRoute();
  const { capturedImageURI } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: capturedImageURI }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default CameraInputScreen;
