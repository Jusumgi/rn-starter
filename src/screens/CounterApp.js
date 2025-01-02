// state example working with numbers

import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const INCREMENT = 5;

const reducer = (state, action) => {
  console.log(action);
  return { ...state, count: state.count + action.amount };
};

const CounterApp = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  // console.log(count);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ count, amount: INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ count, amount: -1 * INCREMENT });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default CounterApp;
