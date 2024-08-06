import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default Layout;
