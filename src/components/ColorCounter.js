import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const ColorCounter = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
			<Button title={`Increase - ${title}`} />
      <Button title={`Decrease - ${title}`} />
    </View>
  );
  
};

const styles = StyleSheet.create({

});

export default ColorCounter;
