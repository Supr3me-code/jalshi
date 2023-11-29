import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import HTML from 'react-native-render-html';

const InfoCard = ({ imageUrl, title, description, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 16,
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  textContainer: {
    margin: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});

export default InfoCard;
