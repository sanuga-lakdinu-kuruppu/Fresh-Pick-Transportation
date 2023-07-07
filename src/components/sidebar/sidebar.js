import React from "react";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import NavMenu from "../navmenu";
import "./sidebarstyles.css";

function SideBar() {
  // Nav bar

  return (
    <div className="bg-light col-auto col-md-2 min-vh-100">
      {/* Application Logo */}
      <a
        href="http://localhost:3000/"
        target="_parent"
        className="text-decoration-none d-flex justify-content-center align-items-center py-5 mb-5"
      >
        <img className="side-bar-logo" src={LOGO_X64} alt="Project Logo" />
        <div className="ms-2">
          <div className="ms-2 mw-100 main-header fw-bolder text-primary">
            FreshPick
          </div>
          <div className="ms-2 side-bar-description text-secondary">
            Where farming meets retails
          </div>
        </div>
      </a>
      {/* Nav bar of the application */}
      <ul className="nav nav-pills mx-2 my-4">
        <NavMenu />
      </ul>
    </div>
  );
}

export default SideBar;
