import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ItemDetailScreen from "../screens/ItemDetailScreen";
import PostItemScreen from "../screens/PostItemScreen";
// import UserProfileScreen from "../screens/UserProfileScreen";
import { AuthContext } from "../contexts/AuthContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Function to create Home Stack
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={{ title: "Item Detail" }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator that includes the Home Stack and other main areas of the app
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "UserProfile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "PostItem") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      {/* <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      <Tab.Screen name="PostItem" component={PostItemScreen} /> */}
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {userToken == null ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "Register" }}
          />
        </Stack.Navigator>
      ) : (
        <MainTabNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
