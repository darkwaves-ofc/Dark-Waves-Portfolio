import React from "react";
import { Link } from "react-router-dom"; // Import Link component

export default function Header() {
  return (
    <header className="navbar p-2 flex-row-bet position-absolute w-95 m-auto">
      <Link to="/" className="navbar-logo text-dark font-lg font-weight-800">
        DarkWaves.Info
      </Link>
      <nav className="w-30 flex-row-aro font-weight-600">
        <Link to="/home" className="navbar-link text-dark">
          Home
        </Link>
        <Link to="/about" className="navbar-link text-dark">
          About
        </Link>
        <Link to="/contact" className="navbar-link text-dark">
          Contact
        </Link>
        <Link to="/projects" className="navbar-link text-dark">
          Projects
        </Link>
      </nav>
    </header>
  );
}
