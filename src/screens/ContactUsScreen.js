import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { callNumber } from "../functions/callFunction";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Contact Us</Text>
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const SwipeTile = ({ icon, title, screenName }) => {
  const handleClick = () => {
    switch (title) {
      case "Call Us":
        callNumber(9876543210);
        break;
      case "Email Us":
        Linking.openURL("mailto:support@example.com");
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.swipeTile} onPress={handleClick}>
      <View style={styles.swipeTileIcon}>
        <FontAwesome5 name={icon} size={32} color="black" />
      </View>
      <View style={styles.swipeTileTitle}>
        <Text style={styles.swipeTileTitleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ContactUsScreen = ({ navigation }) => {

  const navigationCall = () => {
    navigation.navigate('Messages')
  }
  
  const SwipeTile = ({ icon, title, screenName }) => {
    const handleClick = () => {
      switch (title) {
        case "Call Us":
          callNumber(9876543210);
          break;
        case "Email Us":
          Linking.openURL("mailto:support@example.com");
          break;
        case "Chat with Us":
          navigationCall()
          break;
        default:
          break;
      }
    };

    return (
      <TouchableOpacity style={styles.swipeTile} onPress={handleClick}>
        <View style={styles.swipeTileIcon}>
          <FontAwesome5 name={icon} size={32} color="black" />
        </View>
        <View style={styles.swipeTileTitle}>
          <Text style={styles.swipeTileTitleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={{
          height: 230,
          width: 400,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        }}
      />
      <View style={styles.workingHours}>
        <FontAwesome5 name="headphones-alt" size={36} color="black" />
        <Text style={styles.workingHoursText}>
          Working Hours (Mon-Sat) 9:30 AM - 6:30 AM{" "}
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <SwipeTile icon="mask" title="Ask Us" />
        <SwipeTile icon="phone" title="Call Us" />
        <SwipeTile icon="rocketchat" title="Chat with Us" />
        <SwipeTile icon="mail-bulk" title="Email Us" />
      </View>
    </View>
  );
};

export default ContactUsScreen;

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

  // Working Hours
  workingHours: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  workingHoursText: {
    paddingLeft: 10,
    color: "grey",
  },

  // Swipe Tile
  swipeTileHolder: {
    marginTop: 10,
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
