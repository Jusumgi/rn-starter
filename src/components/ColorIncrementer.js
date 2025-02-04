import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorIncrementer = ({ color, onIncrease, onDecrease, value }) => {
  return (
    <View>
      <Text>
        {color} {value}
      </Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ColorIncrementer;
