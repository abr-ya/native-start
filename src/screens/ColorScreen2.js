import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../components/ColorCounter';

const ColorScreen2 = () => {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const setColor = (col, value) => {
    setColors({...colors, col: value})
  };

  return (
    <View>
      <Text style={styles.textStyle1}>Color Generator 2</Text>
      <ColorCounter title="red" />
      <ColorCounter title="green" />
      <ColorCounter title="blue" />
    </View>
  );
  
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 20
  },
});

export default ColorScreen2;
