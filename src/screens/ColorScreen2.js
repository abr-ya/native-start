import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../components/ColorCounter';
import Square from "../components/Square";

const ColorScreen2 = () => {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const setColor = (col, value) => {
    setColors({...colors, [col]: value})
  };

  const {red: r, green: g, blue: b} = colors;

  return (
    <View>
      <Text style={styles.textStyle1}>Color Generator 2</Text>
      <ColorCounter title="red" value={colors.red} setColor={setColor} />
      <ColorCounter title="green" value={colors.green} setColor={setColor} />
      <ColorCounter title="blue" value={colors.blue} setColor={setColor} />

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
