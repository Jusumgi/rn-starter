import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate("Components")}
      />

      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Color Blocks"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Color Adjuster"
        onPress={() => navigation.navigate("ColorAdj")}
      />
      <Button
        title="Go to Name Entry"
        onPress={() => navigation.navigate("Name")}
      />
        <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
