import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import RealTimeTrackingScreen from './src/screens/RealTimeTrackingScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RealTimeTracking"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RealTimeTracking"
          component={RealTimeTrackingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
