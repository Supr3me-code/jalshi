import { StyleSheet, View } from "react-native";
import MessageForm from "../elements/MessageForm";

const AddMessage = () => {
  return (
    <View style={styles.container}>
      <MessageForm />
    </View>
  );
};

export default AddMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
