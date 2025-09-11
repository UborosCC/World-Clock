// Import React hooks
import { useEffect, useState } from "react";

export function useClockType() {
  const [typeAnalog, setTypeAnalog] = useState<boolean>(() => {
    const saved = localStorage.getItem("clockType");
    return saved === "analog"; 
  });

  useEffect(() => {
    localStorage.setItem("clockType", typeAnalog ? "analog" : "digital");
  }, [typeAnalog]);

  return { typeAnalog, setTypeAnalog };
}