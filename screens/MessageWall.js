import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { fetchMessages } from "../util/http";
import MessagesList from "../modules/MessagesList";
import { useQuery } from "react-query";

const MessageWall = () => {
  const { data, error, isLoading } = useQuery("messages", fetchMessages);

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
      <MessagesList messages={data} />
    </LinearGradient>
  );
};

export default MessageWall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 5,
  },
});
