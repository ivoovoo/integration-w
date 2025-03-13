import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../widgets/Sidebar";
import { Users } from "../../../features/Users";

const Layout = () => {
  return (
    <div className="row">
      <Sidebar />
      <div className="row__content">
        <Users />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
