import React from "react";
import { View } from "react-native";

const Square = ({ color, size }) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: color,
      }}
    />
  );
};

export default Square;
