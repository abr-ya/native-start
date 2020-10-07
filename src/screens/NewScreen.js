import React from "react";
import { Text, StyleSheet, View } from "react-native";

const NewScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle1}>Getting started with React Native</Text>
      <Text style={styles.textStyle2}>Hello, World!!!</Text>
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
