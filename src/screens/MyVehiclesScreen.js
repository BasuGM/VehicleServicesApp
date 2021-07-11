import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>My Vehicles</Text>
      </View>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const VehicleTile = () => {
  return (
    <View style={styles.vehicleInfoTile}>
      <View style={styles.vehicleInfoTileTitle}>
        <Text style={styles.vehicleInfoTileTitleText}>Suzuki Access 125</Text>
      </View>
      <View style={styles.vehicleInfoTileIcon}>
        <Fontisto name="angle-right" size={36} color="black" />
      </View>
    </View>
  );
};

const MyVehiclesScreen = () => (
  <View style={styles.container}>
    <Header />
    <VehicleTile />
    <View style={styles.updateProfileTile}>
      <Text style={styles.updateProfileTileText}>ADD VEHICLE</Text>
    </View>
  </View>
);
export default MyVehiclesScreen;

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

  // Add Vehicle
  updateProfileTile: {
    marginTop: 500,
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

  // Vehicle Info Tile
  vehicleInfoTile: {
    marginTop: 10,
    height: 100,
    backgroundColor: "#ddd",
    width: "100%",
    flexDirection: "row",
  },
  vehicleInfoTileTitle: {
    width: "80%",
    padding: 10,
  },
  vehicleInfoTileTitleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  vehicleInfoTileIcon: {
    paddingRight: 30,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
