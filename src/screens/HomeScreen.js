import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const IconTile = ({ icon, title1, title2 }) => {
  return (
    <View style={styles.carServicesIconTile}>
      <View style={styles.carServicesIcon}>
        <View style={styles.carServicesIconIcon}>
          <MaterialCommunityIcons name={icon} size={32} color="orange" />
        </View>
        <View style={styles.carServicesIconTitle}>
          <Text style={styles.carServicesIconTitleText1}>{title1}</Text>
          <Text style={styles.carServicesIconTitleText2}>{title2}</Text>
        </View>
      </View>
    </View>
  );
};

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

const CarServicesMore = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTileHolder}>
        <View style={styles.carServicesTileRow1}>
          <IconTile icon={"caravan"} title1={"Express"} title2={"Service"} />
          <IconTile
            icon={"car-coolant-level"}
            title1={"Dent"}
            title2={"Removal"}
          />
          <IconTile
            icon={"car-cruise-control"}
            title1={"Interior"}
            title2={"Detailing"}
          />
          <IconTile icon={"car-3-plus"} title1={"Car"} title2={"Polish"} />
        </View>
        <View style={styles.carServicesTileRow1}>
          <IconTile
            icon={"car-arrow-left"}
            title1={"Bumper"}
            title2={"Repainting"}
          />
          <IconTile icon={"car-arrow-right"} title1={"Oil"} title2={"Change"} />
          <IconTile icon={"car-back"} title1={"Complete"} title2={"Car Spa"} />
          <IconTile icon={"car-cog"} title1={"AC"} title2={"Service"} />
        </View>
        <View style={styles.carServicesTileRow1}>
          <IconTile
            icon={"car-connected"}
            title1={"Full Body"}
            title2={"Painting"}
          />
          <IconTile icon={"car-convertible"} title1={"Repair"} title2={"Job"} />
        </View>
      </View>
    </View>
  );
};

const CarServicesLess = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTileHolder}>
        <View style={styles.carServicesTileRow1}>
          <IconTile icon={"caravan"} title1={"Express"} title2={"Service"} />
          <IconTile
            icon={"car-coolant-level"}
            title1={"Dent"}
            title2={"Removal"}
          />
          <IconTile
            icon={"car-cruise-control"}
            title1={"Interior"}
            title2={"Detailing"}
          />
          <IconTile icon={"car-3-plus"} title1={"Car"} title2={"Polish"} />
        </View>
        <View style={styles.carServicesTileRow1}>
          <IconTile
            icon={"car-arrow-left"}
            title1={"Bumper"}
            title2={"Repainting"}
          />
          <IconTile icon={"car-arrow-right"} title1={"Oil"} title2={"Change"} />
          <IconTile icon={"car-back"} title1={"Complete"} title2={"Car Spa"} />
          <IconTile icon={"car-cog"} title1={"AC"} title2={"Service"} />
        </View>
      </View>
    </View>
  );
};

const CarServices = () => {
  const [more, setMore] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTile}>
        <View style={styles.carServicesTileTitle}>
          <Text style={styles.carServicesTileTitleText}>Car Services</Text>
        </View>
        <TouchableOpacity
          style={styles.carServicesTileMore}
          onPress={() => setMore(!more)}
        >
          <Text style={styles.carServicesTileMoreText}>
            {more ? "Less" : "More"}
          </Text>
        </TouchableOpacity>
      </View>
      {more && <CarServicesMore />}
      {!more && <CarServicesLess />}
    </View>
  );
};

const BikeServices = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTile}>
        <View style={styles.bikeServicesTileTitle}>
          <Text style={styles.carServicesTileTitleText}>Bike Services</Text>
        </View>
      </View>
      <BikeServicesIconSet />
    </View>
  );
};

const BikeServicesIconSet = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTileHolder}>
        <View style={styles.carServicesTileRow1}>
          <IconTile icon={"bike"} title1={"General"} title2={"Service"} />
          <IconTile
            icon={"bike-fast"}
            title1={"Premium Bike"}
            title2={"Service"}
          />
          <IconTile icon={"motorbike"} title1={"Repair"} title2={"Job"} />
          <IconTile
            icon={"bicycle"}
            title1={"Doorstep Bike"}
            title2={"Service"}
          />
        </View>
        <View style={styles.carServicesTileRow1}>
          <IconTile
            icon={"bicycle-basket"}
            title1={"Premium"}
            title2={"Bike Service"}
          />
        </View>
      </View>
    </View>
  );
};

const AssistServices = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.carServicesTile}>
        <View style={styles.bikeServicesTileTitle}>
          <Text style={styles.carServicesTileTitleText}>24 * 7 Assist</Text>
        </View>
      </View>
      <AssistServicesIconSet />
    </View>
  );
};

const AssistServicesIconSet = () => {
  return (
    <View style={{ width: "100%" }}>
    <View style={styles.carServicesTileHolder}>
      <View style={styles.carServicesTileRow1}>
        <IconTile icon={"air-humidifier"} title1={"General"} title2={"Service"} />
        <IconTile
          icon={"airbag"}
          title1={"Premium Bike"}
          title2={"Service"}
        />
        <IconTile icon={"alien"} title1={"Repair"} title2={"Job"} />
        <IconTile
          icon={"scan-helper"}
          title1={"Doorstep Bike"}
          title2={"Service"}
        />
      </View>
      <View style={styles.carServicesTileRow1}>
        <IconTile
          icon={"android"}
          title1={"Premium"}
          title2={"Bike Service"}
        />
      </View>
    </View>
  </View>

  )
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.containerScrollView}>
        <ImageCarousal />
        <CarServices />
        <BikeServices />
        <AssistServices />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },
  containerScrollView: {
    justifyContent: "center",
    alignItems: "center",
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
  locationTileIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
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
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  carServicesTileTitle: {
    width: '86%'
  },
  bikeServicesTileTitle: {
    width: '100%'
  },
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
  carServicesIconTile: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'blue',
    borderWidth: 0.3,
  },
  carServicesIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  carServicesIconIcon: {},
  carServicesIconTitle: {},
  carServicesIconTitleText1: {},
  carServicesIconTitleText2: {},
  carServicesTileRow1: {
    flexDirection: "row",
  },
  carServicesTileHolder: {},
});
