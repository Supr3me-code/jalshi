import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useMutation } from "react-query";
import { AddMessage } from "../util/http";

const MessageForm = ({ onPress }) => {
  const { mutate, status } = useMutation(AddMessage);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(null);
  const [msgError, setMsgError] = useState(null);

  const handleValidation = () => {
    if (name.trim() === "") {
      setNameError("Please enter your name");
    } else {
      setNameError(null);
    }

    if (message.trim() === "") {
      setMsgError("Please enter your message");
    } else {
      setMsgError(null);
    }
  };

  const onSubmitHandler = async () => {
    handleValidation();

    const messageData = {
      name: name,
      message: message,
    };
    
    if (!!name && !!message) {
      try {
        await mutate(messageData);
        onPress();
      } catch (error) {
        console.error("Error creating message:", error);
      }
    }
  };

  return (
    <View>
      <Text style={styles.title}>Add a message</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
      />
      {msgError ? <Text style={styles.errorText}>{msgError}</Text> : null}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.iconButton} onPress={onSubmitHandler}>
            <Text style={styles.icon}>Submit</Text>
          </Pressable>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.iconButton} onPress={onPress}>
            <Text style={styles.icon}>Close</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    backgroundColor: "#090945",
    width: 70,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  icon: {
    color: "#fff", // Change to your desired icon color
    fontSize: 13,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    maxWidth: 220,
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
});

export default MessageForm;
