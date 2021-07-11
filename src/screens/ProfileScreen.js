import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Fontisto, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Edit Profile</Text>
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const GenderChoice = ({ title, male }) => {
  return (
    <View
      style={{
        height: 30,
        width: 60,
        backgroundColor: male ? "black" : "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: male ? "white" : "black",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const InputTile = ({ title, placeholder, icon }) => {
  return (
    <View style={styles.inputTile}>
      <View style={styles.inputTileLeft}>
        <Fontisto name={icon} size={36} color="black" />
      </View>
      <View style={styles.inputTileTitle}>
        <Text style={styles.inputTileTitleText}>{title}</Text>
        <View style={styles.inputTileInputHolder}>
          <TextInput
            // allowFontScaling=
            style={styles.inputTileInput}
            value={placeholder}
            placeholder="useless placeholder"
          />
        </View>
      </View>
      <View style={styles.inputTileRight}>
        <Feather name="delete" size={36} color="black" />
      </View>
    </View>
  );
};

const InputTileGender = ({ title, placeholder, icon }) => {
  const [isMale, setIsMale] = useState(false);

  return (
    <View style={styles.inputTile}>
      <View style={styles.inputTileLeft}>
        <Fontisto name={icon} size={36} color="black" />
      </View>
      <View style={styles.inputTileTitle}>
        <Text style={styles.inputTileTitleText}>{title}</Text>
        <TouchableOpacity style={styles.inputTileGenderInputHolder} onPress={() => setIsMale(!isMale)}>
          <GenderChoice title={"Male"} male={isMale} />
          <GenderChoice title={"Female"} male={!isMale} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputTileRight}>
        <Feather name="delete" size={36} color="#ddd" />
      </View>
    </View>
  );
};

const ProfileScreen = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.profileInfo}>
      <Text style={styles.profileInfoText}>Profile Info</Text>
    </View>
    <View style={styles.inputTileHolder}>
      <InputTile title="Name" icon="person" placeholder="Basavachetan GM" />
      <InputTile
        title="Phone Number"
        icon="phone"
        placeholder="+91 7795180292"
      />
      <InputTile
        title="Email ID"
        icon="email"
        placeholder="basugm001@gmail.com"
      />
      <InputTileGender
        title="Gender"
        icon="acrobat-reader"
        placeholder="Basavachetan GM"
      />
      <InputTile title="City" icon="periscope" placeholder="Bangalore" />
    </View>

    <View style={styles.updateProfileTile}>
      <Text style={styles.updateProfileTileText}>UPDATE PROFILE</Text>
    </View>
  </View>
);
export default ProfileScreen;

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
  headerLeft: {
    paddingTop: 5,
    paddingLeft: 5,
  },

  // Profile Info
  profileInfo: {
    height: 60,
    width: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingLeft: 10,
  },
  profileInfoText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  // Input Tile
  inputTileHolder: {
    marginTop: 10,
  },
  inputTile: {
    marginVertical: 6,
    backgroundColor: "#ddd",
    flexDirection: "row",
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputTileLeft: {
    padding: 10,
  },
  inputTileTitle: {
    width: "70%",
    height: 80,
    justifyContent: "center",
  },
  inputTileTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputTileRight: {
    padding: 10,
  },
  inputTileInputHolder: {
    height: 40,
  },
  inputTileInput: {
    borderBottomWidth: 1,
    fontSize: 18,
  },
  inputTileGenderInputHolder: {
    height: 40,
    flexDirection: "row",
  },

  // Update Profile

  updateProfileTile: {
    marginTop: 60,
    height: 60,
    width: 360,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  updateProfileTileText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
