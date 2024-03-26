import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://localhost:3000/api/auth";

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    if (response.data.token) {
      console.log("Login successful:", response.data);
      await AsyncStorage.setItem("userToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Login error:",
      error.response ? error.response.data : "Network error"
    );
    throw error;
  }
};

const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    if (response.data.token) {
      console.log("Registration successful:", response.data);

      await AsyncStorage.setItem("userToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error(
      "Registration error:",
      error.response ? error.response.data : "Network error"
    );
    throw error;
  }
};

export const authService = {
  login,
  register,
};
