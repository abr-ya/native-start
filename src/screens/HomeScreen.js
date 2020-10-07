import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);

  return (
  <View>
    <Text style={styles.text}>Hello, World!</Text>
    <Button
      title="Go to NewScreen"
      onPress={() => navigation.navigate('New')}
    />
    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>Go to ListScreen</Text>
    </TouchableOpacity>
    <Button
      title="Go to CardScreen"
      onPress={() => navigation.navigate('Card')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
