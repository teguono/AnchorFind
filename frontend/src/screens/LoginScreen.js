import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import CustomTextInput from "../components/Common/TextInput";
import CustomButton from "../components/Common/Button";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import globalStyles from "../styles/globalStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
      Alert.alert("Login Failed", "The provided credentials are incorrect.");
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
          onPress={() => navigation.navigate("Register")}
        >
          Don't have an account? Sign Up
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
