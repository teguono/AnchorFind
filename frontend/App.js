import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import AppNavigator from "./src/navigation/AppNavigator";
import { decode as base64_decode, encode as base64_encode } from "base-64";

if (!global.atob) {
  global.atob = base64_decode;
}

if (!global.btoa) {
  global.btoa = base64_encode;
}

const AuthenticatedApp = () => {
  const {
    useCheckTokenExpiration,
  } = require("./src/hooks/useCheckTokenExpiration");
  useCheckTokenExpiration();

  return <AppNavigator />;
};

const App = () => {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  );
};

export default App;
