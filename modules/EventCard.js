import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventCard = ({ title, time, location, imageSource }) => {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("EventDetails");
  }
  return (
    <Pressable onPress={onPressHandler}>
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
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 15,
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
