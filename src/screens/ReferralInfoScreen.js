import React from "react";
import { View, Text, StyleSheet } from "react-native";
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

const ReferralInfoScreen = () => {

    const str = `For each friend that joins Vehicle Service, you will be one step closer to getting a free wash & polish for your vehicle. 
            \nYou will be able to claim the free polish package once 5 friends sign-up using your referral link. 
            \nThe promotion can be claimed in the rewards section of thereferral page automatically once 5 friends have signed-up and will expire at the end of the year.`

return (
  <View style={styles.container}>
    <Header />
    <View style={styles.mainTitle}>
      <Text style={styles.mainTitleText}>How Does Referral Work?</Text>
    </View>
    <View style={styles.subTitle}>
      <Text style={styles.subTitleText}>
        {str}
      </Text>
    </View>
  </View>
);
}
export default ReferralInfoScreen;

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

  // Content
  mainTitle: {
    width: "100%",
    height: 100,
    margin: 30,
    paddingHorizontal: 20,
  },
  mainTitleText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  subTitle: {
    width: "100%",
    padding: 30,
    paddingHorizontal: 20,
  },
  subTitleText: {
      fontSize: 22,
      color: '#222',
    //   textAlign: 'justify'
  },
});
