import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/add-timezone" className="navbar-link">Add your own timezone</Link>
        </nav>
    )
}