// Import Link from react-router-dom
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            {/* Navbar links */}
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/AddTimezone" className="navbar-link">Add your own timezone</Link>
        </nav>
    )
}