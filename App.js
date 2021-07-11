import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "./src/screens/HomeScreen";
// import RealTimeTrackingScreen from "./src/screens/RealTimeTrackingScreen";
// import ReferAndEarnScreen from "./src/screens/ReferAndEarnScreen";
// import ProfileAndSettingsScreen from "./src/screens/ProfileAndSettingsScreen";
import MainTab from "./src/navigation/MainTab";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
