import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageCard = ({ message, name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    margin: 16,
    flexDirection: "column-reverse",
  },
  message: {
    fontSize: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    color: "gray",
  },
});

export default MessageCard;
