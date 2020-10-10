import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ title, value, setColor }) => {
  const increaseColor = () => {
    if (value !== 255) setColor(title, (value > 245 ? 255 : value + 10));
  };
  const decreaseColor = () => {
    if (value !== 0) setColor(title, (value > 10 ? value - 10 : 0));
  };

  return (
    <View>
      <Text>{`${title}: ${value}`}</Text>
			<Button title={`Increase - ${title}`} onPress={increaseColor} />
      <Button title={`Decrease - ${title}`} onPress={decreaseColor} />
    </View>
  );
  
};

const styles = StyleSheet.create({

});

export default ColorCounter;
