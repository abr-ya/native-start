import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>TextScreen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} // important to e-mail, userName etc!
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>My name is: {name}</Text>
      {(name.length < 5) && <Text>short name!</Text>}
    </View>
  );
  
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderColor: 'blue',
    borderWidth: 1,
  }
});

export default TextScreen;
