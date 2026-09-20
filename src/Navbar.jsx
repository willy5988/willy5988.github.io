import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Willy
      </Link>

      <div className="navbar-menu">
        <Link to="/" className="navbar-link">
          首頁
        </Link>
        <Link to="/about" className="navbar-link">
          關於
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
