import React from "react";
import { TextInput } from "react-native";
import globalStyles from "../../styles/globalStyles"; // Adjust the import path as necessary

const CustomTextInput = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <TextInput
      style={globalStyles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#aaaaaa" // Consider adding this color to globalStyles if used frequently
      onChangeText={onChangeText}
    />
  );
};

export default CustomTextInput;
