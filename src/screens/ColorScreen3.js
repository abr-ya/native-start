import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounterReducer from '../components/ColorCounterReducer';
import Square from "../components/Square";

const reducer = (state, action) => {
  // state = { red: 0, green: 0, blue: 0 };
  // action = { type: 'set_red' || 'set_green' || 'set_blue', payload: 10 || -10 }

  switch (action.type) {
    case 'set_red':
      return { ...state, red: state.red + action.payload };
    case 'set_green':
      return { ...state, green: state.green + action.payload };
    case 'set_blue':
      return { ...state, blue: state.blue + action.payload };
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
        onIncrease={() => dispatch({ type: 'set_red', payload: 10 })}
        onDecrease={() => dispatch({ type: 'set_red', payload: -10 })}
      />
      <ColorCounterReducer
        color="green"
        value={g}
        onIncrease={() => dispatch({ type: 'set_green', payload: 10 })}
        onDecrease={() => dispatch({ type: 'set_green', payload: -10 })}
      />
      <ColorCounterReducer
        color="blue"
        value={b}
        onIncrease={() => dispatch({ type: 'set_blue', payload: 10 })}
        onDecrease={() => dispatch({ type: 'set_blue', payload: -10 })}
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
