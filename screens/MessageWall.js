import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import MessagesList from "../modules/MessagesList";
import { onValue, ref } from "firebase/database";
import { db } from "../config";
import { useEffect, useState } from "react";

const MessageWall = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "messages/");
    onValue(starCountRef, (snapshot) => {
      const fbData = snapshot.val();
      const messages = Object.keys(fbData).map((key) => ({
        id: key,
        ...fbData[key],
      }));
      messages.reverse();
      setData(messages);
    });
  }, []);

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
