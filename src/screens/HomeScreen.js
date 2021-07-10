import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationTile}>
        <View style={styles.locationTileIcon}>
          <Entypo name="location" size={32} color="orange" />
        </View>
        <View style={styles.locationTileName}>
          <Text style={styles.locationTileNameText}>Bangalore</Text>
        </View>
        <View style={styles.locationTileChevron}>
          <AntDesign name="down" size={32} color="orange" />
        </View>
      </View>
    </View>
  );
};

const ImageCarousal = () => {
  const categoriesData = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80",
    },
  ];

  const renderItem = (item) => {
    return (
      <View
        style={{
          backgroundColor: "#eee",
          height: 200,
        }}
      >
        <Image
          style={{
            height: 200,
            width: 400,
          }}
          source={{
            uri: item.url,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.imageCarousalTile}>
      <FlatList
        horizontal
        data={categoriesData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageCarousal />
      <Text>WORKING HERE</Text>
      <View style={styles.carServicesTile}>
        <View style={styles.carServicesTileTitle}>
          <Text style={styles.carServicesTileTitleText}>Car Services</Text>
        </View>
        <View style={styles.carServicesTileMore}>
          <Text style={styles.carServicesTileMoreText}>More</Text>
        </View>
      </View>

      <View style={styles.carServicesIconTile}>
        <View style={styles.carServicesIcon}>
          <Text>Icon</Text>
          <Text>Title</Text>
        </View>
      </View>
      <Text>WORKING HERE</Text>
      <Text>Bike Services</Text>
      <Text>24 * 7 Assist</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Header
  header: {
    height: 70,
    borderWidth: 0.5,
    width: "100%",
  },
  locationTile: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "50%",
    flexDirection: "row",
  },
  locationTileIcon: {},
  locationTileName: {
    marginHorizontal: 5,
  },
  locationTileNameText: {
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
  },
  locationTileChevron: {},

  // Image Carousal
  imageCarousalTile: {
    height: 200,
  },

  // Car Services
  carServicesTile: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  carServicesTileTitle: {},
  carServicesTileTitleText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#444",
  },
  carServicesTileMore: {},
  carServicesTileMoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#444",
  },
});
