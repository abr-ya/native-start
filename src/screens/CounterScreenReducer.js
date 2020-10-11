import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  // state = { counter: 0 };
  // action = { type: 'plus' || 'minus' }

  switch (action.type) {
    case 'plus':
      return { ...state, counter: state.counter + 1 };
    case 'minus':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreenReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  console.log(state);

  return (
    <View>
      <Text style={styles.textStyle1}>Current Count: {state.counter}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'plus' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'minus' })} />
    </View>
  );
  
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 20
  },
});

export default CounterScreenReducer;
