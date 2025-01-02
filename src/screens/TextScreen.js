import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <Text>Your Name is {name}</Text>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      {password.length < 6 ? (
        <Text>Password must be 5 characters or more</Text>
      ) : (
        <Text>Meets requirements</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
