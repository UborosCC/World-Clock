// Import TimezoneForm component and custom hooks useBackground and useTimezones
import TimezoneForm from "../components/TimezoneForm";
import { useBackground } from "../hooks/useBackground";
import { useTimezones } from "../hooks/useTimezones";

AddTimezone.route = {
    path: '/AddTimezone',
    menuLabel: 'AddTimezone',
    index: 2,
    parent: '/'
}

export default function AddTimezone() {
    // useTimezone for taking:
    // timezones: all available timezones (from JSON + localStorage)
    // selected: current selected city
    const { timezones, selected } = useTimezones();

    // Find the currently selected timezone object based on city name
    const current = timezones.find((tz) => tz.city === selected);

    // Update the background image of the page when "current" changes
    useBackground(current?.background);
    return (
        <main>
            <h1>Add Your Own Timezone</h1>
            {/* Timezone Form component */}
            <TimezoneForm />
        </main>
    )
}