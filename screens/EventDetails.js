import { useQuery } from "react-query";
import { fetchEvents } from "../util/http";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";

const EventDetails = ({ route, navigation }) => {
  const { data, error, isLoading } = useQuery("events", fetchEvents);
  const eventId = route.params.eventId;
  const eventData = data.find((item) => item.id === eventId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: eventData.title,
    });
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: eventData.imageUrl }} />
      <Text style={styles.title}>{eventData.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{eventData.time}</Text>
        <Text style={styles.detailItem}>{eventData.date}</Text>
        <Text style={styles.detailItem}>{eventData.location}</Text>
      </View>
    </ScrollView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
