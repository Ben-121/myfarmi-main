// AppNavigator.js or Navigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiagnoseScreen from './DiagnoseScreen'; // Import the DiagnoseScreen component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Other screen definitions */}
      <Stack.Screen name="DiagnoseScreen" component={DiagnoseScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
