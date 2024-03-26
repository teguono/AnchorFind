import AsyncStorage from "@react-native-async-storage/async-storage";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    return token;
  } catch (error) {
    console.error("Error getting token from storage:", error);
  }
};
