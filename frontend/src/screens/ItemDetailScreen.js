import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import { itemService } from "../services/itemService";

const ItemDetailScreen = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const route = useRoute();
  const { itemId } = route.params;

  useEffect(() => {
    const fetchItemDetails = async () => {
      setIsLoading(true);
      try {
        const fetchedItem = await itemService.getItemById(itemId);
        setItem(fetchedItem);
      } catch (error) {
        console.error(error);
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#DAA520" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Error fetching item details: {error}</Text>
      </View>
    );
  }

  if (!item) {
    return (
      <View style={styles.centered}>
        <Text>Item not found.</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.titleText}>{item.name}</Text>
      {/* Display additional details here */}
      <Text>{item.description}</Text>
      {/* When location data is available, display it here */}
      {/* <Text>{item.location}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ItemDetailScreen;
