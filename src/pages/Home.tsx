import { useEffect, useState } from "react";
import { useTimezones } from "../hooks/useTimezones";
import { useClockType } from "../hooks/useClockType";
import { useBackground } from "../hooks/useBackground";
import Clock from "../components/Clock";
import AnalogClock from "../utils/AnalogClock";
import type { AnalogClockSettings } from "../interfaces/AnalogClock";

export default function Home() {
  const { timezones, selected, setSelected } = useTimezones();
  const { typeAnalog, setTypeAnalog } = useClockType();

  const current = timezones.find((tz) => tz.city === selected);

  const [analogSettings, setAnalogSettings] = useState<AnalogClockSettings>({
    faceColor: "#f4f4f4",
    borderColor: "#02461fff",
    lineColor: "#ca0000ff",
    largeColor: "#008d2fff",
    secondColor: "#cc0000ff",
    timezone: current?.timezone || "UTC",
  });

  useEffect(() => {
    if (current) {
      setAnalogSettings((prev) => ({
        ...prev,
        timezone: current.timezone,
      }));
    }
  }, [current]);

  useBackground(current?.background);

  return (
    <main>
      {/* Dropdown */}
      <select
        className="select-timezones"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {timezones.map((tz, index) => (
          <option key={index} value={tz.city}>
            {tz.city}, {tz.country}
          </option>
        ))}
      </select>

      <h1>World Clock</h1>

      {current && (
        <section className="clock-container">
          {typeAnalog ? (
            <AnalogClock {...{ ...analogSettings, setAnalogSettings }} />
          ) : (
            <Clock
              city={current.city}
              country={current.country}
              timezone={current.timezone}
            />
          )}
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
