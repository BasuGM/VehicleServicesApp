import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const RealTimeTrackingScreen = ({ navigation }) => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={{ width: 40 }}></View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Real Time Tracking</Text>
        </View>
        <TouchableOpacity
          style={styles.headerRight}
          onPress={() => navigation.navigate("Messages")}
        >
          <MaterialIcons name="message" size={28} color="orange" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentScreen}>
        <Text style={styles.contentScreenText}>No More bookings yet</Text>
      </View>
    </View>
  );
};
export default RealTimeTrackingScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
  },
  header: {
    height: 70,
    borderWidth: 0.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerRight: {
    paddingTop: 5,
  },
  contentScreen: {
    backgroundColor: "#ddd",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentScreenText: {
    color: "#aaa",
    fontSize: 16,
  },
});
