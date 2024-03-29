import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import { itemService } from "../services/itemService";

const ItemCard = ({ name, onPress }) => (
  <TouchableOpacity onPress={onPress} style={globalStyles.card}>
    <Text style={globalStyles.cardTitle}>{name}</Text>
    {/* The location can be added here once available */}
  </TouchableOpacity>
);

const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const fetchedItems = await itemService.getItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error(error);
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  const renderItem = ({ item }) => (
    <ItemCard
      name={item.name}
      // location={item.location} // Add this line once location data is available
      onPress={() => navigation.navigate("ItemDetail", { itemId: item.id })}
    />
  );

  return (
    <View style={globalStyles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#DAA520" />
      ) : error ? (
        <Text>Error fetching items: {error}</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;
