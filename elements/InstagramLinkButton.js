import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ImageBackground,
} from "react-native";

const InstagramLinkButton = ({ username }) => {
  const openInstagramProfile = () => {
    const instagramURL = `https://www.instagram.com/${username}`;

    Linking.openURL(`instagram://user?username=${username}`).catch(() => {
      Linking.openURL(instagramURL).catch((err) =>
        console.error("Error opening Instagram:", err)
      );
    });
  };

  return (
    <TouchableOpacity onPress={openInstagramProfile}>
      <ImageBackground
        style={styles.imgbg}
        source={{
          uri: "https://img.freepik.com/free-vector/instagram-background-gradient-colors_23-2147821882.jpg",
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Follow on Instagram</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imgbg: {
    borderRadius: 10,
    width: 200,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  button: {
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default InstagramLinkButton;
