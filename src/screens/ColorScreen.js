import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text style={styles.textStyle1}>Color Generator</Text>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
  
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 20
  },
});

export default ColorScreen;
