import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient colors={["#090945", "#db5dce"]} style={styles.container}>
      <View>
        {/* <Image style={styles.cari} source={require('../assets/jalshi-cari.png')}/> */}
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cari: {
    width: 200,
    height: 250,
    position: 'absolute',
    top: 420,
    left: 225,
  }
});
