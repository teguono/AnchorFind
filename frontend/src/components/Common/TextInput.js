import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#aaaaaa"
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#DAA520",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    color: "#000000",
    fontSize: 16,
  },
});

export default CustomTextInput;
