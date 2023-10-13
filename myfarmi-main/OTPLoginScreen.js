import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
global.Buffer = require('buffer').Buffer;
import { useNavigation } from '@react-navigation/native';


const OTPLoginScreen = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigation = useNavigation();


  const generateRandomOTP = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  

  const handleSendOTP = async () => {
    try {
      // Replace with your Twilio Account SID and Auth Token
      const accountSid = 'AC0aa57dd6c39db659a119b0f7caace3d5';
      const authToken = '3771aa216b6f7d1c6952379e7ec9a42a';

      // Replace with your Twilio phone number
      const fromNumber = '+12184323693';
      const toNumber = phoneNumber;

      const generatedOtp = generateRandomOTP();

      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        `From=${fromNumber}&To=${toNumber}&Body=Your OTP is: ${generatedOtp}`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
          },
        }
      );

      if (response.status === 201) {
        setOtpSent(true);
        setSentOtp(generatedOtp.toString());
      } else {
        Alert.alert('Error', 'Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResendOTP = () => {
    setOtp('');
    setSentOtp('');
    setOtpSent(false);
    handleSendOTP();
  };

  const handleLogin = () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }

    if (otp === sentOtp) {
        navigation.navigate('Home'); // Replace 'Home' with the correct screen name
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>OTP Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {otpSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      ) : (
        <Button title="Send OTP" onPress={handleSendOTP} />
      )}
      {otpSent && (
        <Button title="Resend OTP" onPress={handleResendOTP} />
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
});

export default OTPLoginScreen;
