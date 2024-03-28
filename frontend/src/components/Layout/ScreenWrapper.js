import React from "react";
import { SafeAreaView } from "react-native";
import globalStyles from "../../styles/globalStyles";

const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>{children}</SafeAreaView>
  );
};

export default ScreenWrapper;
