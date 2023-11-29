import { useQuery } from "react-query";
import { fetchInfo } from "../util/http";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import HTML from 'react-native-render-html';

const InfoDetails = ({ route, navigation }) => {
  const { data, error, isLoading } = useQuery("info", fetchInfo);
  const infoId = route.params.infoId;
  const infoData = data.find((item) => item.id === infoId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ fontFamily: "samaro", fontSize: 24 }}>
          Details
        </Text>
      ),
    });
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: infoData.imageUrl }} />
      <Text style={styles.title}>{infoData.title}</Text>
      <View style={styles.description}>
        <Text><HTML source={{ html: infoData.description }} /></Text>
      </View>
    </ScrollView>
  );
};

export default InfoDetails;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  details: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    alignItems: "flex-start",
    margin: 10,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  detailItem: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
});
