import { View, Image, StyleSheet } from "react-native";

const HeaderImage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jalsa-no-bg.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  image: {
    width: 200,
  },
});
