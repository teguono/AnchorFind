import axios from "axios";
import { getToken } from "../utils/helpers";

const API_URL = "http://localhost:3000/api/users";

// Fetch the user profile
const getUserProfile = async () => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error("Authentication token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API_URL}/me`, config);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const userService = {
  getUserProfile,
};
