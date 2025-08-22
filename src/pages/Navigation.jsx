import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/contact">Contact</Link>
            <br />
            <Link to="/not-found">Not Found</Link>
        </nav>
    );
}

export default Navigation;