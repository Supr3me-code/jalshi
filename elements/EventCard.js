import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";

const EventCard = ({ title, imageUrl, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, styles.font]}>
              {title.toUpperCase()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
    marginHorizontal: 25,
    marginTop: 15,
  },
  image: {
    height: 150,
    resizeMode: "cover",
  },
  titleContainer: {
    padding: 10,
    marginHorizontal: 60,
    marginVertical: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "kalam-bold",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default EventCard;
