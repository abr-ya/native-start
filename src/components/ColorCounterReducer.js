import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounterReducer = ({ color, value, onIncrease, onDecrease }) => {
  const increaseColor = () => {
    if (value <= 255) onIncrease();
  };
  const decreaseColor = () => {
    if (value > 0) onDecrease();
  };

  return (
    <View>
      <Text>{`${color}: ${value}`}</Text>
			<Button title={`Increase - ${color}`} onPress={increaseColor} />
      <Button title={`Decrease - ${color}`} onPress={decreaseColor} />
    </View>
  );
  
};

const styles = StyleSheet.create({

});

export default ColorCounterReducer;
