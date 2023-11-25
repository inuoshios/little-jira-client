export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const getItem = () => {
    try {
      window.localStorage.getItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  };

  return { setItem, getItem, removeItem };
};