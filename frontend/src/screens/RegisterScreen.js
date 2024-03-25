import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomTextInput from "../components/Common/TextInput";
import CustomButton from "../components/Common/Button";
import ScreenWrapper from "../components/Layout/ScreenWrapper";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Sign-up logic goes here.");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <CustomTextInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />

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

        <CustomButton title="Sign Up" onPress={handleSignUp} />

        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Text
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000", // Black color for the title
  },
  loginTextContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: "#000", // Black color for the text
  },
  loginButton: {
    fontSize: 16,
    color: "#DAA520", // Gold color for the clickable 'Login' text
    fontWeight: "bold",
  },
});

export default RegisterScreen;
