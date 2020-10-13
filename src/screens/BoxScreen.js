import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}>Child #1</Text>
      <Text style={styles.text2Style}>Child #2</Text>
      <Text style={styles.text3Style}>Child #3</Text>
    </View>
  );
  
};

const styles = StyleSheet.create({
  viewStyle: {
    //alignItems: 'flex-start',
    //flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 3,
    borderColor: 'black',
    height: 250,
  },
  text1Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
  text2Style: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
    alignSelf: 'flex-start',
    top: 10,
  },
  text3Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
