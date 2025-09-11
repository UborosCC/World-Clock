import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Timezone } from "../interfaces/timezone";

export default function TimezoneForm() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [timezone, setTimezone] = useState("");
    const [background, setBackground] = useState("");
    const [timezones, setTimezones] = useLocalStorage<Timezone[]>("timezones", []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newZone: Timezone = { city, country, timezone, background };
        setTimezones([...timezones, newZone]);
        setCity("");
        setCountry("");
        setTimezone("");
        setBackground("");
    };

    return (
        <form className="timezone-form" onSubmit={handleSubmit}>
            <h2 className="timezone-form-header">Country</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
            <h2 className="timezone-form-header">City</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
            <h2 className="timezone-form-header">Timezone</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Timezone (for example: Europe/Stockholm)"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            required
            />
            <h2 className="timezone-form-header">Background Image</h2>
            <input 
            className="timezone-input"
            type="text"
            placeholder="Background image URL"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            required
            />
            <button type="submit" className="timezone-save">Save</button>
        </form>
    )
}