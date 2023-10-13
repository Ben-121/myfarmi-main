import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook


const SellScreen = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const navigation = useNavigation(); // Use the hook


  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleImageUpload = () => {
    // Implement image upload logic here
  };


  const handleSubmit = () => {
    navigation.navigate('Sell');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell Your Product</Text>

      {/* Step 1: Category selection */}
      <Text>Select Category:</Text>
      {/* Implement your category selection UI (e.g., radio buttons or dropdown) */}
      {/* Use handleCategoryChange to update the selected category state */}
      
      {/* Step 2: Product details */}
      <Text>Product Name:</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />
      
      <Text>Product Price:</Text>
      <TextInput
        style={styles.input}
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="decimal-pad"
      />
      
      {/* Step 3: Image upload */}
      {/* Implement your image upload UI */}
      <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
        <Text style={styles.buttonText}>Upload Product Image</Text>
      </TouchableOpacity>
      {/* Display the uploaded image */}
      {/* You can use Image component or ImageBackground component to show the uploaded image */}
      
      {/* Submit button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
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
  uploadButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#00cc00',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SellScreen;
