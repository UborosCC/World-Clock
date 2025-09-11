// Import React useState hook
import { useState } from "react";

// Custom hook to sync state with localStorage
export default function useLocalStorage<T>(key: string, initialValue: T) {
    // Initialize state with value from localStorage (if it exists)
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            // Attempt to read from localStorage
            const item = window.localStorage.getItem(key);
            // If found, parse it from JSON, otherwise use the initial value
            return item ? JSON.parse(item) : initialValue;
        } catch {
            // If any error occours (such as localStorage unavalible), return initial value
            return initialValue;
        }
    });

    // Setter function to update both React state and localStorage
    const setValue = (value: T) => {
        try {
            // Update React State
            setStoredValue(value);
            // Persist to localStorage as JSON
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // If error occours during update, show error message
            console.error("Error saving to localStorage");
        }
    };

    // Return value and setter in a tuple, just like useState
    return [storedValue, setValue] as const;
}