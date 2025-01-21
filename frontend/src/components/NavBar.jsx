import React from "react";
import { useState } from "react";

function NavBar() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setMenuClicked] = useState(false);

  function updateMenu() {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setMenuClicked(!isMenuClicked);
  }

  return (
    <section>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>
      <div className={menu_class}></div>
    </section>
  );
}

export default NavBar;
