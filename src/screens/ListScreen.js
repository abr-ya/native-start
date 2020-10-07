import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {name: 'Friend 1', age: 20},
    {name: 'Friend 2', age: 40},
    {name: 'Friend 3', age: 30},
    {name: 'Friend 4', age: 15},
    {name: 'Friend 5', age: 18},
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({item}) => {
      return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  }
});

export default ListScreen;
