import { StyleSheet, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EventCard from "../modules/EventCard";
import { useQuery } from "react-query";
import { fetchEvents } from "../util/http";

const Events = () => {
  const { data, error, isLoading } = useQuery("events", fetchEvents);

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
      <ScrollView>
        {data &&
          data.map((event) => {
            console.log(event, "EVENT");
            return (
              <EventCard
                imageSource={event.imageUrl}
                title={event.title}
                time={event.time}
                location={event.location}
              />
            );
          })}
      </ScrollView>
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
