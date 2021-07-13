import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>All Cities</Text>
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const ChooseLocationScreen = () => {
  const [city, setCity] = useState("bangalore");

  const LocationTile = ({ title, keyLocation }) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 10,
          borderWidth: 1,
          flexDirection: "row",
          width: "90%",
          borderWidth: city === title ? 3 : 1,
          borderColor: city === title ? "orange" : "black",
          height: 60,
          alignItems: "center",
        }}
        onPress={() => setCity(keyLocation)}
      >
        <View style={styles.locationTileIcon}>
          <MaterialIcons name="location-city" size={40} color="black" />
        </View>
        <View style={styles.locationTileTitle}>
          <Text style={styles.locationTileTitleText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <LocationTile title="Chennai" keyLocation="Chennai" />
      <LocationTile title="Bangalore" keyLocation="Bangalore" />
      <LocationTile title="Pune" keyLocation="Pune" />
      <LocationTile title="Mumbai" keyLocation="Mumbai" />
      <LocationTile title="Madurai" keyLocation="Madurai" />
      <LocationTile title="Coimbatore" keyLocation="Coimbatore" />
      <LocationTile title="Hyderabad" keyLocation="Hyderabad" />
      <LocationTile title="Kochi" keyLocation="Kochi" />
      <LocationTile title="Dharwad" keyLocation="Dharwad" />
      {/* <Text>WORKING HERE</Text> */}
      <View style={styles.selectCityTile}>
        <Text style={styles.selectCityTileText}>SELECT CITY</Text>
      </View>
      {/* <Text>WORKING HERE</Text> */}
    </View>
  );
};
export default ChooseLocationScreen;

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

  // Location Tile
  locationTile: {
    marginTop: 10,
    borderWidth: 1,
    flexDirection: "row",
    width: "90%",
    // borderWidth: city === "bangalore" ? 3 : 1,
    // borderColor: city === "bangalore" ? "orange" : "black",
    height: 60,
    // justifyContent: 'center',
    alignItems: "center",
    // borderWidth: 3,
  },
  locationTileIcon: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  locationTileTitle: {
    // borderWidth: 1,
    height: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 60,
  },
  locationTileTitleText: {
    // borderWidth: 1,
    fontSize: 26,
    fontWeight: "bold",
  },

  // Select City

  selectCityTile: {
    marginTop: 10,
    height: 60,
    width: 360,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  selectCityTileText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
