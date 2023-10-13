import React, { useState } from 'react';
import { View, Text,TouchableOpacity , Button, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const SellingScreen = () => {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [cart, setCart] = useState([]);
  const navigation = useNavigation(); // Use the hook

  const navigateToScreen = () => {
    navigation.navigate('Sell');
  };const navigateToScreen1 = () => {
    navigation.navigate('Buy');
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      price: parseFloat(newProductPrice),
      quantity: 10, // Starting quantity
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductPrice('');
  };

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product && product.quantity > 0) {
      setCart([...cart, product]);
      product.quantity--;
    }
  };

  return (
    
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Farming Market</Text>

      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1577153651485-d6f478de99d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80z' }}
        style={styles.bannerImage}
      />
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={navigateToScreen}>
          <Text style={styles.sellButton}>SELL</Text>
        </TouchableOpacity>    
  <TouchableOpacity style={styles.button} onPress={navigateToScreen1}>
          <Text style={styles.buyButton}>BUY</Text>
        </TouchableOpacity>  
       </View>

      {/* <View style={styles.addProductForm}>
        <Text style={styles.formTitle}>Add New Product</Text>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={newProductName}
          onChangeText={setNewProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={newProductPrice}
          onChangeText={setNewProductPrice}
          keyboardType="decimal-pad"
        />
        <Button title="Add Product" onPress={addProduct} />
      </View> */}

      <View style={styles.productList}>
        {products.map(product => (
          <View key={product.id} style={styles.productItem}>
            <Text>{product.name}</Text>
            <Text>Price: ₹{product.price.toFixed(2)}/- kg</Text>
            <Text>Available: {product.quantity} units</Text>
            <Button
              title="Add to Cart"
              onPress={() => addToCart(product.id)}
              disabled={product.quantity === 0}
            />
          </View>
        ))}
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginVertical:5,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Display buttons horizontally
    justifyContent: 'space-around', // Separate buttons with space
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10, // Increase vertical padding
  },
  bannerImage: {
    alignContent:'auto',
    alignSelf:'auto',
    width: '100%',
    borderRadius: 20,
    height: 250,
  },
  
  addProductForm: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  productList: {
    marginBottom: 20,
  },
  productItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  cartSummary: {
    marginBottom: 20,
    alignItems: 'center',
  },
  buyButton: {
    flex: 10,    
    backgroundColor:'#2980B9',
    marginRight: 40,
    fontSize: 30,
  },
  sellButton: {
    
    backgroundColor:'#2980B9',
    flex: 10,
    marginLeft: 10,
    fontSize: 30,
  },
});

export default SellingScreen;