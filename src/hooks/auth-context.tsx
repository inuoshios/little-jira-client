import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

interface Props {
  children: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  useEffect(() => {
    const checkAuthStatus = () => {
      const { getItem } = useLocalStorage("accessToken");
      if (getItem!) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  return children;
}

export default AuthProvider;