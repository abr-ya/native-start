import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ title, value, setColor }) => {
  const increaseColor = () => {setColor(title, value + 10)};
  const decreaseColor = () => {setColor(title, value - 10)};

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
