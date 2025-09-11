// Import React hooks and Timezone interface
import { useEffect, useState } from "react";
import type { Timezone } from "../interfaces/timezone";

// Define props for the Clock component, excluding 'background' since it's not needed here
type ClockProps = Omit<Timezone, "background">;

export default function Clock({ city, country, timezone }: ClockProps) {
    // State to hold the current time string
    const [time, setTime] = useState<string>("");

    // useEffect runs once when component mounts and whenever 'timezone' changes
    useEffect(() => {
        // Function to update the time according to the selected timezone
        const update = () => {
            const now = new Date().toLocaleTimeString("sv-SE", {
                timeZone: timezone,  // Use the passed timezone prop
                hour: "2-digit",     // -||-
                second: "2-digit",   // Show hours, minutes and seconds with two digits (such as 02, 14)
                minute: "2-digit",   // -||-
                hour12: false,       // Use 24-hour format instead of AM/PM
            });
            setTime(now);            // Update the state with the new time
        };

        update();                    // Call once immediately to avoid initial blank time
        const interval = setInterval(update, 1000); // Update every second

        // Cleanup function to clear the interval when component unmounts or timezone changes
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <section className="clock-box">
            {/* Display the current time */}
            <p className="clock-props">{time}</p>
            {/* Display the city and country */}
            <p className="clock-props">{city}, {country}</p>
        </section>
    )
}