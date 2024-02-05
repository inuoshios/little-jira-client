import { ReactNode, createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
  token: string | undefined | null;
  setToken: React.Dispatch<React.SetStateAction<string | undefined | null>>
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | undefined | null>(undefined);

  const { getItem: accessToken } = useLocalStorage('accessToken')
  setIsLoggedIn(true);
  setToken(accessToken)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}