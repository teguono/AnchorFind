import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomTextInput from "../components/Common/TextInput";
import CustomButton from "../components/Common/Button";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import globalStyles from "../styles/globalStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Implement the log-in logic
    console.log("Log-in logic goes here.");
  };

  return (
    <ScreenWrapper>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.titleText}>Login</Text>

        <CustomTextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />

        <CustomTextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <CustomButton title="Login" onPress={handleLogin} />

        <Text
          style={globalStyles.hyperlinkText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an account? Sign Up
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
