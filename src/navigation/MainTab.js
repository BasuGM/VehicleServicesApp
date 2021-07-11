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

// import HomeScreen from "./src/screens/HomeScreen";
// import RealTimeTrackingScreen from "./src/screens/RealTimeTrackingScreen";
// import ReferAndEarnScreen from "./src/screens/ReferAndEarnScreen";
// import ProfileAndSettingsScreen from "./src/screens/ProfileAndSettingsScreen";

const Tab = createMaterialBottomTabNavigator();

const Feed = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        alignItems: "center",
        justifyContents: "center",
      }}
    >
      <Text>Feed</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        alignItems: "center",
        justifyContents: "center",
      }}
    >
      <Text>Profile</Text>
    </View>
  );
};

const Notifications = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        alignItems: "center",
        justifyContents: "center",
      }}
    >
      <Text>Notifications</Text>
    </View>
  );
};

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
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
