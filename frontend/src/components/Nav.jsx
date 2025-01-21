import React from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoTD from "../assets/logoTD.png";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Des voitures de légende", path: "./LegendaryCars" },
    { name: "Rénovations", path: "./Renovations" },
    { name: "Evénements", path: "./Events" },
    { name: "A propos", path: "./About" },
    { name: "Contact", path: "./Contact" },
  ];
  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo">
        <img src={logoTD} alt="Logo" />
      </div>

      <ul className="navbar_links">
        {navLinks.map((link, index) => (
          <li key={index} className="navbar_item">
            <Link to={link.path} className="navbar_link">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
