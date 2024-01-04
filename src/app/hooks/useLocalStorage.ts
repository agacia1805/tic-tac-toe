import { useEffect, useState } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (newValue: T | ((val: T) => T)) => void] {
  const readValue = () => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error('Error reading from Local Storage:', error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    try {
      const item = JSON.stringify(storedValue);
      window.localStorage.setItem(key, item);
    } catch (error) {
      console.error('Error saving to Local Storage:', error);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
