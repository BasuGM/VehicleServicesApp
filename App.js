import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainTab from "./src/navigation/MainTab";
import ProfileScreen from "./src/screens/ProfileScreen";
import MyVehiclesScreen from "./src/screens/MyVehiclesScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import ReferralInfoScreen from "./src/screens/ReferralInfoScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTab"
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
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
        />
        <Stack.Screen
          name="ReferralInfo"
          component={ReferralInfoScreen}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
