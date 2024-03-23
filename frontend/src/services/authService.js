import axios from "axios";

const API_URL = "localhost:3000";

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/users/login`, {
      username,
      password,
    });
    if (response.data.token) {
      console.log("Login successful:", response.data);
      // Store the token locally (consider using secure storage)
    }
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response.data);
    throw error;
  }
};

export const authService = {
  login,
};
