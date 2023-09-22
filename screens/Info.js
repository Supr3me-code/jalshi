import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useQuery } from "react-query";
import { fetchInfo } from "../util/http";
import InfoList from "../modules/InfoList";

const Info = () => {
  const { data, error, isLoading } = useQuery("info", fetchInfo);

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
      <InfoList info={data} />
    </LinearGradient>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 5,
  },
});
