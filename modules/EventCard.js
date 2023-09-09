import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const EventCard = ({ title, time, location, imageSource, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageSource }} style={styles.image} />
        <View style={styles.details}>
          <View>
            <Text style={[styles.title, styles.font]}>{title}</Text>
          </View>
          <View>
            <Text style={[styles.time, styles.font]}>{time}</Text>
            <Text style={[styles.location, styles.font]}>{location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    opacity: 0.5,
    marginHorizontal: 10,
    marginTop: 15
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  details: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: "#555",
  },
  font: {
    fontFamily: "kalam-regular",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default EventCard;
