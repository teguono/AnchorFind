import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext"; // Adjust the path as necessary

import AppNavigator from "./src/navigation/AppNavigator"; // Your main navigator

const App = () => {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
