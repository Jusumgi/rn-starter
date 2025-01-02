// state example working with numbers

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default CounterApp;
