import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconText = ({ icon, text }) => {
  return (
    <View style={styles.detailItem}>
      <Ionicons name={icon} size={15} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
  },
});
