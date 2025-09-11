import { useEffect, useState } from "react";
import type { Timezone } from "../interfaces/timezone";

type ClockProps = Omit<Timezone, "background">;

export default function Clock({ city, country, timezone }: ClockProps) {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const update = () => {
            const now = new Date().toLocaleTimeString("sv-SE", {
                timeZone: timezone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            });
            setTime(now);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <section className="clock-box">
            <p className="clock-props">{time}</p>
            <p className="clock-props">{city}, {country}</p>
        </section>
    )
}