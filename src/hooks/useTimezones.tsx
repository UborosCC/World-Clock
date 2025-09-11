import { useEffect, useState } from "react";
import type { Timezone } from "../interfaces/timezone";
import timezonesData from "../json/timezones.json";

/**
 * En custom hook för att hantera tidszoner:
 * - Laddar in fördefinierade + användarens tidszoner
 * - Hanterar vald stad
 * - Sparar valet i localStorage
 */
export function useTimezones() {
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [selected, setSelected] = useState<string>("");

  // Hjälpfunktioner (privata för hooken)
  function loadTimezones(): Timezone[] {
    const baseTimezones: Timezone[] = timezonesData;
    const stored = localStorage.getItem("timezones");
    const userTimezones: Timezone[] = stored ? JSON.parse(stored) : [];
    return [...baseTimezones, ...userTimezones];
  }

  function loadSelectedCity(timezones: Timezone[]): string {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity && timezones.some((tz) => tz.city === savedCity)) {
      return savedCity;
    }
    return timezones.length > 0 ? timezones[0].city : "";
  }

  // Ladda tidszoner och initial stad
  useEffect(() => {
    const all = loadTimezones();
    setTimezones(all);
    setSelected(loadSelectedCity(all));
  }, []);

  // Spara vald stad i localStorage
  useEffect(() => {
    if (selected) {
      localStorage.setItem("selectedCity", selected);
    }
  }, [selected]);

  return { timezones, selected, setSelected };
}
