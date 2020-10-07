import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Card = ({ title, img, score }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{title}</Text>
			<Text style={styles.score}>{`Image score - ${score}`}</Text>
    </View>
  );
  
};

const styles = StyleSheet.create({
  score: {
    marginBottom: 15
  }
});

export default Card;
