import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Refer and Earn</Text>
      </View>
    </View>
  );
};

const ReferAndEarnScreen = () => (
  <View style={styles.container}>
    <Header />

    <View style={styles.inviteAndEarn}>
      <Text style={styles.inviteAndEarnText}>Invite and earn free service</Text>
    </View>

    <View style={styles.spreadTheWord}>
      <View style={styles.spreadTheWordLeft}>
        <View style={styles.spreadTheWordTitle}>
          <Text style={styles.spreadTheWordTitleText}>
            Spread the word about GoBumpr and win free services
          </Text>
        </View>
        <View style={styles.spreadTheWordTitle2}>
          <Text style={styles.spreadTheWordTitleText2}>How does this work</Text>
        </View>
      </View>
      <View style={styles.spreadTheWordRight}>
        <Image
          style={{
            height: 330,
            width: 200,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
          }}
        />
      </View>
    </View>
    <View style={styles.sendInviteTile}>
      <Text style={styles.sendInviteTileText}>SEND INVITES</Text>
    </View>
  </View>
);
export default ReferAndEarnScreen;

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
  inviteAndEarn: {
    height: 140,
    width: "100%",
    justifyContent: "center",
  },
  inviteAndEarnText: {
    margin: 20,
    flexWrap: "wrap",
    fontSize: 38,
  },
  spreadTheWord: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  spreadTheWordLeft: {
    width: "50%",
    height: 300,
  },
  spreadTheWordTitle: {
    height: 200,
    justifyContent: "center",
  },
  spreadTheWordTitleText: {
    fontSize: 28,
    margin: 20,
  },
  spreadTheWordTitle2: {},
  spreadTheWordTitleText2: {
    fontSize: 28,
    margin: 20,
    color: "orange",
  },
  spreadTheWordRight: {
    width: "50%",
  },
  sendInviteTile: {
      marginTop: 100,
    height: 60,
    width: 360,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  sendInviteTileText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
  },
});
