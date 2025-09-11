// Import React hooks, Timezone interface and predefined timezone JSON data
import { useEffect, useState } from "react";
import type { Timezone } from "../interfaces/timezone";
import timezonesData from "../json/timezones.json";

export function useTimezones() {
    // State to hold the combined list of timezones (default predefined timezones + user-added timezones)
    const [timezones, setTimezones] = useState<Timezone[]>([]);

    // State to hold the currently selected city name
    const [selected, setSelected] = useState<string>("");

    // Loads all timezones by merging:
    // Predifned timezones from timezones.json and user-added timezones in localStorage
    function loadTimezones(): Timezone[] {
        const baseTimezones: Timezone[] = timezonesData;

        // Load user-added timezones from localStorage (if any)
        const stored = localStorage.getItem("timezones");
        const userTimezones: Timezone[] = stored ? JSON.parse(stored) : [];

        // Return combined array
        return [...baseTimezones, ...userTimezones];
    }

    // Determines which city should be selected initially
    // Uses saved value from localStorage if available and valid, otherwise falls back to the first timezone in the predefined list
    function loadSelectedCity(timezones: Timezone[]): string {
        const savedCity = localStorage.getItem("selectedCity");

        // If there is a saved city and it exists in the list, use it
        if (savedCity && timezones.some((tz) => tz.city === savedCity)) {
            return savedCity;
        }

        // Otherwise fallback and choose first city if available, if none exist return empty string
        return timezones.length > 0 ? timezones[0].city : "";
    }

    // Effect to load timezones and selected city on component mount
    useEffect(() => {
        const all = loadTimezones();
        setTimezones(all);
        setSelected(loadSelectedCity(all));
    }, []);

    // Effect to save selected city to localStorage whenever it changes
    useEffect(() => {
        if (selected) {
            localStorage.setItem("selectedCity", selected);
        }
    }, [selected]);

    // Return state and setter so components can use them
    return { timezones, selected, setSelected };
}
