import React from "react";
import { Link } from "react-router-dom";
import { links } from "../config/links";


const Navigation = () => {
  
  return (

        <nav className="header__nav">
          {links.map(({ path, children }) => (
            <Link className="header__link" key={path} to={path}>
              {children}
            </Link>
          ))}
        </nav>
  );
};

export default Navigation;
