import {useEffect, useState} from 'react';

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const valueLS = localStorage.getItem(key);
    setValue(valueLS ? JSON.parse(valueLS) : undefined);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
