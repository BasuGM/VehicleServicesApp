import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Profile and Settings</Text>
      </View>
    </View>
  );
};

const ProfileAndSettingsScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const SwipeTile = ({ icon, title, screenName }) => {
    return (
      <TouchableOpacity
        style={styles.swipeTile}
        onPress={() => navigation.navigate(screenName)}
      >
        <View style={styles.swipeTileIcon}>
          <FontAwesome5 name={icon} size={32} color="black" />
        </View>
        <View style={styles.swipeTileTitle}>
          <Text style={styles.swipeTileTitleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SwipeTileLogout = ({ icon, title }) => {
    return (
      <TouchableOpacity
        style={styles.swipeTile}
        onPress={() => setIsVisible(!isVisible)}
      >
        <View style={styles.swipeTileIcon}>
          <FontAwesome5 name={icon} size={32} color="black" />
        </View>
        <View style={styles.swipeTileTitle}>
          <Text style={styles.swipeTileTitleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
const LogoutDialog = () => {
  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Title>Log Out</Dialog.Title>
      <Dialog.Description>
        Do you want to log out of this account?
      </Dialog.Description>
      <Dialog.Button label="Cancel" onPress={() => setIsVisible(!isVisible)} />
      <Dialog.Button label="Logout" onPress={() => setIsVisible(!isVisible)}/>
    </Dialog.Container>
  );
};

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.swipeTileHolder}>
        <SwipeTile icon="person-booth" title="Profile" screenName="Profile" />
        <SwipeTile icon="bicycle" title="My Vehicles" screenName="MyVehicles" />
        <SwipeTile icon="phone" title="Contact Us" screenName="ContactUs" />
        <SwipeTile icon="info" title="About Us" screenName="AboutUs" />
        <SwipeTileLogout
          icon="window-close"
          title="Logout"
          screenName="AboutUs"
        />
      </View>
      <LogoutDialog />
    </View>
  );
};

export default ProfileAndSettingsScreen;

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
    justifyContent: "center",
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
