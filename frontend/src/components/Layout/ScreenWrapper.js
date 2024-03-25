import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const ScreenWrapper = ({ children }) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background for screens
    padding: 20,
  },
});

export default ScreenWrapper;
