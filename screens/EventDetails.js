import { useQuery } from "react-query";
import { fetchEvents } from "../util/http";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import IconText from "../elements/IconText";

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
      {/* <Text style={styles.title}>{eventData.title}</Text> */}
      <View style={styles.details}>
        <IconText icon={"calendar"} text={eventData.date} />
        <IconText icon={"time"} text={eventData.time} />
        <IconText icon={"location"} text={eventData.location} />
      </View>
      <View style={styles.description}>
        <Text>{eventData.description}</Text>
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    alignItems: "flex-start",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  detailItem: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
});
