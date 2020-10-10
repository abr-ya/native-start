import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounterReducer from '../components/ColorCounterReducer';
import Square from "../components/Square";

const reducer = (state, action) => {
  // state = { red: 0, green: 0, blue: 0 };
  // action = { color: 'red' || 'green' || 'blue', value: 10 || -10 }

  switch (action.color) {
    case 'red':
      return { ...state, red: state.red + action.value };
    case 'green':
      return { ...state, green: state.green + action.value };
    case 'blue':
      return { ...state, blue: state.blue + action.value };
    default:
      return state;
  }
};

const ColorScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  console.log(state);

  const {red: r, green: g, blue: b} = state;

  return (
    <View>
      <Text style={styles.textStyle1}>Control Color Generator - Reducer Virsion</Text>
      <ColorCounterReducer
        color="red"
        value={r}
        onIncrease={() => dispatch({ color: 'red', value: 10 })}
        onDecrease={() => dispatch({ color: 'red', value: -10 })}
      />
      <ColorCounterReducer
        color="green"
        value={g}
        onIncrease={() => dispatch({ color: 'green', value: 10 })}
        onDecrease={() => dispatch({ color: 'green', value: -10 })}
      />
      <ColorCounterReducer
        color="blue"
        value={b}
        onIncrease={() => dispatch({ color: 'blue', value: 10 })}
        onDecrease={() => dispatch({ color: 'blue', value: -10 })}
      />

      <Square color={`rgb(${r}, ${g}, ${b})`} size={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 20
  },
});

export default ColorScreen2;
