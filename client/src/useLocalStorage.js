import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const messages = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;
    return messages;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  const setValues = (value) => {
    setStoredValue((prev) =>
      typeof value === "function" ? value(prev) : value
    );
  };

  return [storedValue, setValues];
};

export default useLocalStorage;
