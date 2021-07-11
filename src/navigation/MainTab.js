import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import RealTimeTrackingScreen from "../screens/RealTimeTrackingScreen";
import ReferAndEarnScreen from "../screens/ReferAndEarnScreen";
import ProfileAndSettingsScreen from "../screens/ProfileAndSettingsScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{
        backgroundColor: "white",
        height: 60,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="RealTimeTracking"
        component={RealTimeTrackingScreen}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color }) => (
            <Entypo name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Assistance"
        component={ReferAndEarnScreen}
        options={{
          tabBarLabel: "Assistance",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hands-helping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ReferAndEarn"
        component={ReferAndEarnScreen}
        options={{
          tabBarLabel: "Rewards",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileAndSettings"
        component={ProfileAndSettingsScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-profile-woman"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
