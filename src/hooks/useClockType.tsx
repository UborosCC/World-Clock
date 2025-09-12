// Import React hooks
import { useEffect, useState } from "react";

export function useClockType() {
  // State to track whether the user wants analog or digital clock
  // The initial value is read from localStorage if it's available
  const [typeAnalog, setTypeAnalog] = useState<boolean>(() => {
    const saved = localStorage.getItem("clockType"); // Read saved value
    return saved === "analog";  // If saved value is "analog" then return true, otherwise false
  });

  // Whenever "typeAnalog" changes, save the new value in localStorage
  useEffect(() => {
    localStorage.setItem("clockType", typeAnalog ? "analog" : "digital");
  }, [typeAnalog]); // Runs again only when typeAnalog changes

  // Return both the state and the setter function so it can be used in components
  return { typeAnalog, setTypeAnalog };
}