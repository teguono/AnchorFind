import React from "react";
import { TouchableOpacity, Text } from "react-native";
import globalStyles from "../../styles/globalStyles";

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={globalStyles.buttonContainer}>
    <Text style={globalStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;
