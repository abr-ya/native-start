import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);

  return (
  <View>
    <Text style={styles.text}>Home Screen</Text>
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
    <Button
      title="Go to CounterScreen"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to ColorScreen"
      onPress={() => navigation.navigate('Color')}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26
  }
});

export default HomeScreen;
