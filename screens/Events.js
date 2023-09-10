import { StyleSheet, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EventCard from "../elements/EventCard";
import { useQuery } from "react-query";
import { fetchEvents } from "../util/http";
import EventsList from "../modules/EventsList";

const Events = ({ navigation }) => {
  const { data, error, isLoading } = useQuery("events", fetchEvents);

  const onEventCardPress = () => {
    navigation.navigate("EventDetails");
  };

  {
    isLoading && (
      <>
        <Text>Loading...</Text>
      </>
    );
  }

  {
    error && (
      <>
        <Text>{error}</Text>
      </>
    );
  }

  return (
    <LinearGradient colors={["#090945", "#db5dce"]} style={styles.container}>
      <EventsList events={data} />
    </LinearGradient>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 5,
  },
});
