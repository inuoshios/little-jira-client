export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred, please try again');
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item;
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred, please try again');
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred, please try again');
    }
  };

  return { setItem, getItem, removeItem };
};