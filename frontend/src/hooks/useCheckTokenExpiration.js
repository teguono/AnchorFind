// hooks/useCheckTokenExpiration.js
import { useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../contexts/AuthContext";

export const useCheckTokenExpiration = () => {
  const { userToken, signOut } = useContext(AuthContext);

  useEffect(() => {
    let logoutTimer;
    if (userToken) {
      const decodedToken = jwtDecode(userToken);
      const currentTime = Date.now() / 1000;
      const timeLeft = decodedToken.exp - currentTime;

      if (timeLeft <= 0) {
        signOut();
      } else {
        logoutTimer = setTimeout(() => {
          signOut();
        }, timeLeft * 1000);
      }
    }

    return () => clearTimeout(logoutTimer);
  }, [userToken, signOut]);
};
