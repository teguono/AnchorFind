import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-stosssrage/async-storage";
import { authService } from "../services/authService.js";

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export const AuthContext = createContext();

const authReducer = (prevState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check the storage for an existing token on app startup
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.error("Failed to load token", e);
      }
      // After retrieving token update state
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        try {
          const response = await authService.login(email, password);
          await AsyncStorage.setItem("userToken", response.token);
          dispatch({ type: "SIGN_IN", token: response.token });
        } catch (error) {
          console.error("Login error:", error);
          throw error;
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
          dispatch({ type: "SIGN_OUT" });
        } catch (error) {
          console.error("Logout error:", error);
        }
      },
      signUp: async (data) => {
        // Implement sign-up logic if necessary
        console.log("Sign-up logic goes here.");
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...state, ...authContext }}>
      {children}
    </AuthContext.Provider>
  );
};
