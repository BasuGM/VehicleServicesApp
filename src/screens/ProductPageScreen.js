import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const PointHolder = ({ title1, content1, icon1, title2, content2, icon2 }) => {
  return (
    <View style={styles.pointsHolder}>
      <View style={styles.pointsTile}>
        <View style={styles.pointsIcon}>
          <FontAwesome5 name={icon1} size={32} color="black" />
        </View>
        <View style={styles.pointsTitle}>
          <Text style={styles.pointsTitleHeadingText}>{title1}</Text>
          <Text style={styles.pointsTitleContentText}>{content1}</Text>
        </View>
      </View>
      <View style={styles.pointsTile}>
        <View style={styles.pointsIcon}>
          <MaterialIcons name={icon2} size={40} color="black" />
        </View>
        <View style={styles.pointsTitle}>
          <Text style={styles.pointsTitleHeadingText}>{title2}</Text>
          <Text style={styles.pointsTitleContentText}>{content2}</Text>
        </View>
      </View>
    </View>
  );
};

const SalientFeaturesTile = ({ heading, content }) => {
  return (
    <View style={styles.salientFeaturesContent}>
      <Text style={styles.salientFeaturesContentHeadingText}>{heading}</Text>
      <Text style={styles.salientFeaturesContentText}>{content}</Text>
    </View>
  );
};

const SalientFeatures = () => {
  strHeading1 = "-Best-class dent repair techniques";
  strContent1 = "Gas-welding and paintless dent pulling thier solutions";
  strHeading2 = "-Get back your car's factory look";
  strContent2 = "Expert tinkering with 3M & Wurth Compound.";
  strHeading3 = "-OEM & Branded Paints";
  strContent3 =
    "Repainting using top-quality paints from Asian. Dupont & Nippon in OEM authorised paint booths";

  return (
    <View style={styles.salientFeatures}>
      <View style={styles.salientFeaturesTitle}>
        <Text style={styles.salientFeaturesTitleText}>Salient Features</Text>
      </View>
      <SalientFeaturesTile heading={strHeading1} content={strContent1} />
      <SalientFeaturesTile heading={strHeading2} content={strContent2} />
      <SalientFeaturesTile heading={strHeading3} content={strContent3} />
    </View>
  );
};

const ProductPageScreen = () => (
  <View style={styles.container}>
    <Image
      style={{ width: 400, height: 200 }}
      source={{
        uri: "https://images.unsplash.com/photo-1616993166667-e3d889d74814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      }}
    />
    <View style={styles.viewAbovePointsField}></View>
    <View style={styles.pointsField}>
      <PointHolder
        title1="Go Digital"
        content1="Convinient online payment options."
        icon1="asterisk"
        title2="Pick-Up & Drop"
        content2="Service from the comfort of your home/office"
        icon2="store"
      />
      <PointHolder
        title1="Our Promise"
        content1="100% satisfaction guaranteed."
        icon1="hand-holding-heart"
        title2="Expert Service"
        content2="Skilled mechanics for your every need."
        icon2="nature-people"
      />
    </View>
    <View style={styles.viewAbovePointsField}></View>
    <SalientFeatures />
    <View style={styles.bookYourServiceTile}>
      <Text style={styles.bookYourServiceTileText}>BOOK YOUR SERVICE</Text>
    </View>
  </View>
);
export default ProductPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    // justifyContent: 'center'
  },

  // Points Holder
  viewAbovePointsField: {
    height: 15,
  },
  pointsField: {
    backgroundColor: "#ccc",
    padding: 5,
  },
  pointsHolder: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  pointsTile: {
    flexDirection: "row",
    width: "50%",
    height: 100,
  },
  pointsIcon: {
    width: "30%",
    padding: 10,
  },
  pointsTitle: {
    flex: 1,
  },
  pointsTitleHeadingText: {
    marginTop: 5,
    fontSize: 18,
    marginLeft: 5,
  },
  pointsTitleContentText: {
    color: "#777",
    marginLeft: 5,
  },

  // Salient Features
  salientFeatures: {
    width: "100%",
    paddingHorizontal: 20,
  },
  salientFeaturesTitle: {},
  salientFeaturesTitleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  salientFeaturesContent: {
    width: "95%",
    padding: 5,
  },
  salientFeaturesContentHeadingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  salientFeaturesContentText: {
    fontSize: 16,
    color: "#444",
  },

  // Book Your Service
  bookYourServiceTile: {
    marginTop:10,
    height: 60,
    width: 360,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  bookYourServiceTileText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
