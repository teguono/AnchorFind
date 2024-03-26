import axios from "axios";
import { getToken } from "../utils/authUtils";

const API_URL = "http://10.71.86.28:3000/ap/items";

const getItems = async () => {
  try {
    const token = await getToken();
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error.response.data);
    throw error;
  }
};

const getItemById = async (itemId) => {
  try {
    const token = await getToken();
    const response = await axios.get(`${API_URL}/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching item by ID:", error.response.data);
    throw error;
  }
};

const postItem = async (itemData) => {
  try {
    const token = await getToken();
    const response = await axios.post(API_URL, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting a new item:", error.response.data);
    throw error;
  }
};

const updateItem = async (itemId, itemData) => {
  try {
    const token = await getToken();
    const response = await axios.put(`${API_URL}/${itemId}`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error.response.data);
    throw error;
  }
};

const deleteItem = async (itemId) => {
  try {
    const token = await getToken();
    const response = await axios.delete(`${API_URL}/${itemId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error.response.data);
    throw error;
  }
};

export const itemService = {
  getItems,
  getItemById,
  postItem,
  updateItem,
  deleteItem,
};
