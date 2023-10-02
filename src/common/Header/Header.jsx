import React from "react";

export default function Header() {
  return (
    <header className="navbar bg-primary p-2 flex-row-bet">
      <a href="#" className="navbar-logo text-white font-lg font-bold">
        Your Logo
      </a>
      <nav className="w-60 flex-row-aro">
        <a href="#" className="navbar-link text-white">
          Home
        </a>
        <a href="#" className="navbar-link text-white">
          About
        </a>
        <a href="#" className="navbar-link text-white">
          Contact
        </a>
        <a href="#" className="navbar-link text-white">
          Projects
        </a>
      </nav>
    </header>
  );
}
