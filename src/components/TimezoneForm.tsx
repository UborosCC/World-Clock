// Import useState hook, custom useLocaleStorage hook and Timezone interface 
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Timezone } from "../interfaces/timezone";

export default function TimezoneForm() {
    // Local state for form inputs
    const [city, setCity] = useState("");              // City Input
    const [country, setCountry] = useState("");        // Country Input
    const [timezone, setTimezone] = useState("");      // Timezone Input
    const [background, setBackground] = useState("");  // Background img URL input

    // useLocalStorage hook to persist added timezones
    // Ket: "timezones", default: empty array
    const [timezones, setTimezones] = useLocalStorage<Timezone[]>("timezones", []);

    // Handler for form submissions
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default page reload

        // Create a new timezone object from form values
        const newZone: Timezone = { city, country, timezone, background };

        // Save the new timezone to localStorage
        setTimezones([...timezones, newZone]);

        // Reset the form inputs
        setCity("");
        setCountry("");
        setTimezone("");
        setBackground("");
    };

    return (
        <form className="timezone-form" onSubmit={handleSubmit}>
            {/* Country Input Field */}
            <h2 className="timezone-form-header">Country</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />

            {/* City  Input Field */}
            <h2 className="timezone-form-header">City</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />

            {/* Timezone Input Field */}
            <h2 className="timezone-form-header">Timezone</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Timezone (for example: Europe/Stockholm)"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            required
            />
            
            {/* Background Input Field */}
            <h2 className="timezone-form-header">Background Image</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Background image URL"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            required
            />
            
            {/* Submit Button */}
            <button type="submit" className="timezone-save">Save</button>
        </form>
    )
}