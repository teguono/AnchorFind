import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/authService";
import CustomTextInput from "../components/Common/TextInput";
import CustomButton from "../components/Common/Button";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import globalStyles from "../styles/globalStyles";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      // Navigation to the main screen can be handled automatically by listening to auth state changes
    } catch (error) {
      console.error(error);
    }
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
