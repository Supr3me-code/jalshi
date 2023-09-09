import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EventCard from "../modules/EventCard";

const Events = () => {
  return (
    <LinearGradient colors={["#090945", "#db5dce"]} style={styles.container}>
      <ScrollView>
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
        <EventCard
          imageSource={
            "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg"
          }
          title={"Haldi"}
          time={"2:00pm"}
          location={"Ground"}
        />
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
