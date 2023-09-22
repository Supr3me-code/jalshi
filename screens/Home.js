import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CountdownTimer from "../elements/CountdownTimer";
import InstagramLinkButton from "../elements/InstagramLinkButton";
import BulletPoints from "../elements/BulletPoints";

const Home = () => {
  const targetTime = new Date("2023-12-08T00:00:00").getTime();
  return (
    <LinearGradient colors={["#090945", "#db5dce"]} style={styles.container}>
      <View style={styles.upperHome}>
        <View style={styles.placeholder}>
          <Text style={styles.text1}>Welcome</Text>
          <Text style={styles.text2}>to the</Text>
          <Text style={styles.text1}>Celebration</Text>
        </View>
        <CountdownTimer targetTime={targetTime} />
        <InstagramLinkButton username={"jalshi.forever"} />
      </View>
      <View style={styles.imgContainer}>
        <View style={styles.cariNeighbor}>
          <BulletPoints
            heading={"What's here"}
            points={[
              "Live countdown and instagram link",
              "Events information",
              "Send your well    wishes for the couple",
              "Stay up to date with the event updates through the info section",
            ]}
          />
        </View>
        <Image
          style={styles.cari}
          source={require("../assets/jalshi-cari.png")}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  cariNeighbor: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 10,
    overflow: "hidden",
    maxWidth: 200,
  },
  text1: { fontFamily: "samaro", fontSize: 60, color: "white" },
  text2: { fontFamily: "samaro", fontSize: 25, color: "white" },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: 'red',
    padding: 0,
    marginTop: 10,
  },
  placeholder: {
    height: 200,
    paddingTop: 20,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  upperHome: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  cari: {
    width: 180,
    height: 300,
    padding: 0,
    resizeMode: "contain",
    // backgroundColor: 'yellow'
  },
});
