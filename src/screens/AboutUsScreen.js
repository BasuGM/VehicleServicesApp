import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>About Us</Text>
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const SwipeTile = ({ icon, title, screenName }) => {
  return (
    <TouchableOpacity style={styles.swipeTile}>
      <View style={styles.swipeTileIcon}>
        <Entypo name={icon} size={32} color="black" />
      </View>
      <View style={styles.swipeTileTitle}>
        <Text style={styles.swipeTileTitleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AboutUsScreen = () => (
  <View style={styles.container}>
    <Header />
    <Image
      style={{
        height: 230,
        width: 400,
      }}
      source={{
        uri: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
      }}
    />
    <View style={styles.swipeTileHolder}>
      <SwipeTile icon="facebook" title="Like us on Facebook" />
      <SwipeTile icon="instagram" title="Follow us on Instagram" />
      <SwipeTile icon="paper-plane" title="Terms and Conditions" />
      <SwipeTile icon="fingerprint" title="Privacy Policy" />
    </View>
  </View>
);
export default AboutUsScreen;


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
  },

  // Header
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
  headerLeft: {
    paddingTop: 5,
    paddingLeft: 5,
  },

  // Swipe Tile
  swipeTileHolder: {
    marginTop: 20,
    width: "100%",
  },
  swipeTile: {
    marginVertical: 5,
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ddd",
    alignItems: "center",
  },
  swipeTileIcon: {
    width: 80,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  swipeTileTitle: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  swipeTileTitleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
