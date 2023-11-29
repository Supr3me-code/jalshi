import { View, Image, StyleSheet, Text } from "react-native";

const Header = ({ isHome = false, title }) => {
  return (
    <View>
      {isHome && (
        <Image
          style={styles.image}
          source={require("../assets/jalsa-no-bg.png")}
          resizeMode="contain"
        />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 200,
  },
  title: {
    fontFamily: "samaro",
    color: "white",
    fontSize: 35,
  },
});
