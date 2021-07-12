import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Ionicons name="arrow-back-circle-outline" size={36} color="white" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Inbox</Text>
        <Text style={styles.headerTitleText2}>
          Currently replying in 5 minutes
        </Text>
      </View>
    </View>
  );
};

const InputField = () => {
  return (
    <View style={styles.messageField}>
      <View style={styles.messageFieldLeft}>
        <Entypo name="attachment" size={28} color="black" />
      </View>
      <View style={styles.messageFieldInputHolder}>
        <TextInput
          style={styles.messageFieldInput}
          placeholder="Type a message"
        />
      </View>
      <View style={styles.messageFieldRight}>
        <FontAwesome name="send" size={28} color="black" />
      </View>
    </View>
  );
};

const MessageContainer = ({ they, me}) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.messageContainerOther}>
        <View style={styles.messageContainerOtherIn}>
          <Text style={styles.messageContainerOtherInText}>{they}</Text>
        </View>
      </View>
      <View style={styles.messageContainerMe}>
        <View style={styles.messageContainerMeIn}>
          <Text style={styles.messageContainerMeInText}>{me}</Text>
        </View>
      </View>
    </View>
  );
};

const MessagesScreen = () => {
  const strT1 =
    "Thanks for reaching out to GoBumpr. Please share your query along with your contact details. Our team will get back to you during our working hours from 9.30 AM to 6.30 PM (Monday to Saturday)";
  const strM1 = "Hello There!";
  const strT2 = 'Welcome to GoBumper chat support. Let us know your query or any issues with your service. we\'ll get cracking on it. Super Quick!'
  const strM2 = 'I want to cancel my order'
  const strT3 = 'Hello! We hope our customer representatives have already contacted you regarding your service and seems like your booking has been canceled already. For any more assistance, you can drop down your queries here. Our customer representatives will be happy to assist you.'
  const strM3 = 'Thank you.'

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <MessageContainer they={strT1} me={strM1} />
          <MessageContainer they={strT2} me={strM2}/>
          <MessageContainer they={strT3} me={strM3}/>
        </ScrollView>
      </View>
      <InputField />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
  },

  // Header
  header: {
    flexDirection: "row",
    borderWidth: 1,
    width: "100%",
    height: 70,
    alignItems: "center",
    backgroundColor: "#222",
  },
  headerIcon: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {},
  headerTitleText: {
    fontSize: 20,
    color: "white",
  },
  headerTitleText2: {
    fontSize: 18,
    color: "#ccc",
  },

  // Message Field
  messageField: {
    borderWidth: 1,
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  messageFieldLeft: {
    // borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  messageFieldInputHolder: {
    flex: 1,
  },
  messageFieldInput: {
    fontSize: 18,
  },
  messageFieldRight: {
    // borderWidth: 1,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  // Message Container
  messageContainer: {
    // borderWidth: 1,
    width: 400,
  },
  messageContainerOther: {
    width: "100%",
    alignItems: "flex-start",
  },
  messageContainerOtherIn: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#bbb4e0",
    width: "60%",
  },
  messageContainerOtherInText: {
    fontSize: 18,
  },
  messageContainerMe: {
    width: "100%",
    alignItems: "flex-end",
  },
  messageContainerMeIn: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
    width: "60%",
    backgroundColor: "#dbc08c",
  },
  messageContainerMeInText: {
    fontSize: 18,
  },
});
