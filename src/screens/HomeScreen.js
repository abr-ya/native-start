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
      title="Go to CounterScreen with Reducer"
      onPress={() => navigation.navigate('CounterR')}
    />
    <Button
      title="Go to Random Color Generator"
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      title="Go to Control Color Generator"
      onPress={() => navigation.navigate('Color2')}
    />
    <Button
      title="Go to Control Color Generator - Reducer Version"
      onPress={() => navigation.navigate('Color3')}
    />
    <Button
      title="Go to Text Screen"
      onPress={() => navigation.navigate('Txt')}
    />
    <Button
      title="Go to Box Screen"
      onPress={() => navigation.navigate('Box')}
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
