import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import CustomTextInput from "../components/Common/TextInput";
import CustomButton from "../components/Common/Button";
import ScreenWrapper from "../components/Layout/ScreenWrapper";
import globalStyles from "../styles/globalStyles";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  const handleSignUp = async () => {
    try {
      await signUp({ username, email, password });
      Alert.alert(
        "Sign Up Successful",
        "You can now log in with your new account."
      );
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Sign Up Failed", "An error occurred during sign up.");
    }
  };

  return (
    <ScreenWrapper>
      <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.titleText}>Sign Up</Text>

        <CustomTextInput
          style={globalStyles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />

        <CustomTextInput
          style={globalStyles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />

        <CustomTextInput
          style={globalStyles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <CustomButton title="Sign Up" onPress={handleSignUp} />

        <Text
          style={globalStyles.hyperlinkText}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account? Login
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default RegisterScreen;
