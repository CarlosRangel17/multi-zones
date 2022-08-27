// source from https://github.com/craig1123/react-recipes
import { useState } from 'react'

export function getSessionStorageItem<S>(key: string, initialValue: { [key: string]: string | string[] } | S) {
  try {
    // Get from local storage by key
    const item = window.sessionStorage.getItem(key)
    // Parse stored json or if none return initialValue
    return item !== null ? JSON.parse(item) : initialValue
  } catch (error) {
    // If error also return initialValue
    return initialValue
  }
}

export function setSessionStorageItem<S>(key: string, value: S) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error(`Cannot set value: ${value} to key: ${key}`)
  }
}

function useSessionStorage<S>(
  key: string,
  initialValue: { [key: string]: string | string[] } | S
): [S, (value: S[]) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<S>(() => getSessionStorageItem(key, initialValue))

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to sessionStorage.
  const setValue = (value: S[]) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // let it fail gracefully
    }
  }

  return [storedValue, setValue]
}

export default useSessionStorage
