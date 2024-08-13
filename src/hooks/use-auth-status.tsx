import { useMemo } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const useAuthStatus = () => {
  //   const [loggedIn, setLoggedIn] = useState<boolean>(false);
  //   const [checkingStatus, setCheckingStatus] = useState<boolean>(true);
  const { getItem } = useLocalStorage("accessToken");
  const token = getItem();

  const isLoggedIn = useMemo(() => {
    if (token) {
      return true;
    }
    return false;

  }, [token]);

  return isLoggedIn;
}