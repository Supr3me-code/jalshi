import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Events = () => {
  return (
    <LinearGradient colors={["#090945", "#db5dce"]} style={styles.container}>
      <View>
        <Text></Text>
      </View>
    </LinearGradient>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});
