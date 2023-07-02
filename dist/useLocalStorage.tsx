import { useEffect, useState } from "react";

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.error("Failed to retrieve value from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const serializedValue = JSON.stringify(storedValue);
        window.localStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      console.error("Failed to store value in localStorage:", error);
    }
  }, [key, storedValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
  };

  const removeValue = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
        setStoredValue(initialValue);
      }
    } catch (error) {
      console.error("Failed to remove value from localStorage:", error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
