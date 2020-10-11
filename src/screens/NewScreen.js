import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewScreen = () => {
  function createPhoneNumber(numbers){
    const gr1 = numbers.slice(0,3).join('');
    const gr2 = numbers.slice(3,6).join('');
    const gr3 = numbers.slice(6).join('');
    return `(${gr1}) ${gr2}-${gr3}`;
  }

  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with React Native</Text>
      <Text style={styles.textStyle2}>Hello, World!!!</Text>
      <Text style={styles.textStyle2}>{createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])}</Text>
    </View>
  );
  
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default NewScreen;
