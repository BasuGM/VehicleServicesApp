import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainTab from "./src/navigation/MainTab";
import ProfileScreen from "./src/screens/ProfileScreen";
import MyVehiclesScreen from "./src/screens/MyVehiclesScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ContactUs"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="MainTab"
          component={MainTab}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="MyVehicles"
          component={MyVehiclesScreen}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
