import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../../shared/lib/classNames/classNames";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import { links } from "../config/links";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Интеграция</h2>
      <nav className="sidebar__links">
        {links.map(({ icon, path, value, display, mobile }) => (
          <NavLink
            className={classNames("sidebar__link", [], {
              display,
              mobile,
            })}
            key={path}
            to={path}
          >
            <Sprite icon={icon} width={25} height={25} />
            <p className="sidebar__value">{value}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
