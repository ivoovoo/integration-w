import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Navgitaion";
import { Link } from "react-router-dom";

import "./Header.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const Header = () => {
  const openRef = useRef();
  const closeRef = useRef();
  const [menuClass, setMenuClass] = useState("");
  useEffect(() => {
    function checkClick(e) {
      if (e.target === openRef.current) {
        document.body.classList.add("overflow");
        setMenuClass("active");
      } else if (e.target === closeRef.current) {
        document.body.classList.remove("overflow");
        setMenuClass("");
      }
    }

    document.addEventListener("click", checkClick);

    return () => {
      if (document.body.classList.contains("overflow")) {
        document.body.classList.remove("overflow");
      }
      document.removeEventListener("click", checkClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo-two" to={"/"}>
          Интеграция
        </Link>
        <div className={classNames("header__menu", [menuClass])}>
          <Link className="header__logo" to={"/"}>
            Интеграция
          </Link>
          <Navigation />
          <Link className="header__right-button"  to={'matrix-of-fate'}>
            Рассчитать слово
          </Link>{" "}
          <ThemeSwitcher />
          <button className="header__menu-close" ref={closeRef}>
            <Sprite width={40} height={40} icon="close" />
          </button>
        </div>
        <button className="header__menu-button" ref={openRef}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
