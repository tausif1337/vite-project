import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;