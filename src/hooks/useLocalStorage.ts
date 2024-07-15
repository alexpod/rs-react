import { useState } from "react";

type ReturnValue = [
  string | null,
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

type UseLocalStorage = (key: string) => ReturnValue;

export const UseLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState(
    localStorage.getItem(key)
  )
  const setItem = (newValue: string) => {
    localStorage.setItem(key, newValue)
    setValue(newValue)
  }
  const removeItem = () => {
    if (!key) return
    localStorage.removeItem(key)
    setValue(null)
  }
  return [value, { setItem, removeItem }]
}
