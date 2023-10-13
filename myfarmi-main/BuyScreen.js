import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const productsData = [
  { id: '1', title: 'Crop 1', price: 10, image: require('./assets/9b1d3d3a84a6ca80c23c0162ab0a8294.jpg') },
  { id: '2', title: 'Crop 2', price: 15, image: require('./assets/2f8404318b316c5b1d8e9f88cf554b90.jpg') },
  { id: '3', title: 'Crop 3', price: 12, image: require('./assets/moda.jpg') },
  // ... add more products
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0); // Track total amount

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const calculateTotalAmount = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleCheckout = () => {
    calculateTotalAmount();
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart before checking out.');
    } else {
      const confirmPayment = window.confirm(`Total amount to pay: $${totalAmount}`);
      if (confirmPayment) {
        setCart([]);
        alert('You have successfully paid. Thank you for your purchase!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Online Shopping App</Text>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
            <View style={styles.addButtonContainer}>
              <TouchableOpacity onPress={() => updateQuantity(item.id, (item.quantity || 0) - 1)}>
                <Text style={styles.plusMinusText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity || 0}</Text>
              <TouchableOpacity onPress={() => updateQuantity(item.id, (item.quantity || 0) + 1)}>
                <Text style={styles.plusMinusText}>+</Text>
              </TouchableOpacity>
            </View>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <View style={styles.cart}>
        <Text style={styles.cartHeading}>Cart</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <Text>{item.title} - ${item.price} x {item.quantity}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        ))}
        <Button title="Checkout" onPress={handleCheckout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  product: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100, // adjust as needed
    marginBottom: 10,
  },
  addButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusMinusText: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  cart: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
    paddingTop: 10,
  },
  cartHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingVertical: 5,
  },
  cartItemImage: {
    width: 30,
    height: 30, // adjust as needed
    marginRight: 10,
  },
});

export default App;