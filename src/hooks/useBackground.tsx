// Import React useEffect hook
import { useEffect } from "react";

export function useBackground(backgroundUrl?: string) {
    // useEffect runs whenever backgroundUrl changes
    useEffect(() => {
    // If no background URL provided, do nothing    
    if (!backgroundUrl) return;

    // Set the background image on the entire document body
    document.body.style.backgroundImage = `url(${backgroundUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    // Cleanup function that resets background when component unmounts
    // or when backgroundUrl changes to different value
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, [backgroundUrl]); 
}