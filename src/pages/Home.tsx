import { useEffect, useState } from "react"; // React useEffect and useState hooks
import { useTimezones } from "../hooks/useTimezones"; // Custom hook for loading/saving timezones + selected city
import { useClockType } from "../hooks/useClockType"; // Custom hook for toggling between digital/analog clock
import { useBackground } from "../hooks/useBackground"; // Custom hook for setting background image
import Clock from "../components/Clock"; // Digital clock component
import AnalogClock from "../utils/AnalogClock"; // Analog clock component (canvas-based)
import type { AnalogClockSettings } from "../interfaces/AnalogClock"; // Analog clock interface

export default function Home() {
  // useTimezones gives us:
  // timezones: all available timezones (from JSON + localStorage)
  // selected: current selected city
  // setSelected: function to change the selected city
  const { timezones, selected, setSelected } = useTimezones();

  // useClockType manages whether the user wants analog or digital clock
  const { typeAnalog, setTypeAnalog } = useClockType();

  // Find the currently selected timezone object based on city name
  const current = timezones.find((tz) => tz.city === selected);

  // State for analog clock appearance + timezone
  const [analogSettings, setAnalogSettings] = useState<AnalogClockSettings>({
    faceColor: "#f4f4f4",        // Clock face color
    borderColor: "#02461fff",    // Clock border color
    lineColor: "#ca0000ff",      // Hour/minute lines color
    largeColor: "#008d2fff",     // Hour/minute hand color
    secondColor: "#cc0000ff",    // Second hand color
    timezone: current?.timezone || "UTC", // Default timezone (fallback to UTC)
  });

  // Whenever "current" changes (when user selects a new city),
  // update the analog clock settings so it shows the correct timezone
  useEffect(() => {
    if (current) {
      setAnalogSettings((prev) => ({
        ...prev, // keep previous colors/settings
        timezone: current.timezone, // update timezone only
      }));
    }
  }, [current]);

  // Update the background image of the page when "current" changes
  useBackground(current?.background);

  return (
    <main>
      {/* Dropdown menu for selecting city/timezone */}
      <select
        className="select-timezones"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {[...timezones]
        .sort((a, b) => a.city.localeCompare(b.city))
        .map((tz, index) => (
          <option key={index} value={tz.city}>
            {tz.city}, {tz.country}
          </option>
        ))}
      </select>

      <h1>World Clock</h1>

      {/* Only render a clock if we have a selected timezone */}
      {current && (
        <section className="clock-container">
          {/* Render either AnalogClock or Digital Clock based on user choice */}
          {typeAnalog ? (
            <AnalogClock {...{ ...analogSettings, setAnalogSettings }} />
          ) : (
            <Clock
              city={current.city}
              country={current.country}
              timezone={current.timezone}
            />
          )}

          {/* Button to toggle between digital and analog mode */}
          <button
            className="clock-change-button"
            onClick={() => setTypeAnalog(!typeAnalog)}
          >
            {typeAnalog ? "Digital" : "Analog"}
          </button>
        </section>
      )}
    </main>
  );
}
