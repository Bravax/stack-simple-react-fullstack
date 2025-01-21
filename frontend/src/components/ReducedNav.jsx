import React from "react";
import { Link } from "react-router-dom";
import logoTD from "../assets/logoTD.png";
import "../styles/ReducedNav.scss"

function ReducedNav() {
  const handleShowLink = () => {};
  return (
    <ection className="reduced">
      <img src={logoTD} alt="Logo" className="logo" />
      <Link to="/" onClick={handleShowLink}>
      <button>Accueil</button>
      </Link>
    </ection>
  );
}
export default ReducedNav;
