import { useState } from "react";

type SessionStorageValue<T> = T | null;

export const useSessionStorage = <T,>(
  key: string,
  initialValue: SessionStorageValue<T> = null
) => {
  const [value, setValue] = useState<SessionStorageValue<T>>(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  const set = (newValue: SessionStorageValue<T>) => {
    setValue(newValue);
    if (newValue === null) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  const get = () => value;

  const remove = () => set(null);

  return { set, get, remove };
};
