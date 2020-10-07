import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Card from '../components/Card';

const CardScreen = () => {
  return (
    <View>
      <Text>CardScreen</Text>
      <Card title="Forest" img={require(`../../assets/forest.jpg`)} score={7} />
      <Card title="Beach" img={require(`../../assets/beach.jpg`)} score={10} />
      <Card title="Mountain" img={require(`../../assets/mountain.jpg`)} score={9} />
    </View>
  );
  
};

const styles = StyleSheet.create({

});

export default CardScreen;
