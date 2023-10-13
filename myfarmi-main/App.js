import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./WeatherScreen";
import ProfileScreen from "./ProfileScreen";
import CropDoctorScreen from "./CropDoctorScreen";
import DiagnoseScreen from "./DiagnoseScreen"; // Import DiagnoseScreen
import SellScreen from "./SellScreen";
import ChatScreen from "./ChatScreen";
import CalScreen from "./CalScreen";
import OTPLoginScreen from "./OTPLoginScreen";
import CropPredictionScreen from "./CropPredictionScreen";
import PestControl from "./PestControl";
import KnowledgeBase from "./KnowledgeBase";
import BuyScreen from "./BuyScreen";
import CameraInputScreen from "./CameraInputScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create a stack navigator
// import i18next from 'i18next';
// import { initReactI18next } from "react-i18next";
// import enTranslation from "./locales/en.json"; // Import your English translation JSON
// import hiTranslation from "./locales/hi.json"; // Import your Hindi translation JSON
// import teTranslation from "./locales/te.json"; // Import your Telugu translation JSON
import NewsletterScreen from "./NewsArticles";

const CropStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CropDoctor" component={CropDoctorScreen} />
    <Stack.Screen name="Diagnose" component={DiagnoseScreen} />
    <Stack.Screen name="Croppp" component={CropPredictionScreen} />
    <Stack.Screen name="Pestie" component={PestControl} />

    <Stack.Screen name="Calendar" component={CalScreen} />
  </Stack.Navigator>
);

const CropStack1 = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="Sell" component={SellScreen} />
    <Stack.Screen name="Buy" component={BuyScreen} />
  </Stack.Navigator>
);

const HomeScreen1 = () => (
  <Stack.Navigator>
    <Stack.Screen name="otp" component={OTPLoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBarOptions={{
          style: {
            backgroundColor: "#2980B9",
          },
          labelStyle: {
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen1}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={CropStack1}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Crop"
          component={CropStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="doctor" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={NewsletterScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="bookmark-multiple"
                color={color}
                size={26}
              />
            ),
          }}
        />

        <Tab.Screen
          name="know"
          component={KnowledgeBase}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="youtube" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="forum" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
