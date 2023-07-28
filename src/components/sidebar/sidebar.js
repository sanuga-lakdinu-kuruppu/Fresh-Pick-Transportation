import React from "react";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import NavMenu from "../navmenu";
import "./sidebarstyles.css";
import UserCard from "../usercard/usercard";

function SideBar() {
  // Nav bar

  return (
    <div className="bg-white col-auto min-vh-100">
      {/* Application Logo */}
      <a
        href="http://localhost:3000/"
        target="_parent"
        className="text-decoration-none d-flex justify-content-center align-items-center py-5 mb-5"
      >
        <img className="side-bar-logo" src={LOGO_X64} alt="Project Logo" />
        <div className="ms-2 me-4">
          <div className="ms-2 mw-100  fw-bolder primary-color">FreshPick</div>
          <div className="ms-2 side-bar-description secondary-color">
            Where farming meets retails
          </div>
        </div>
      </a>
      {/* Nav bar of the application */}
      <ul className="nav nav-pills mx-2 my-4">
        <NavMenu />
      </ul>

      {/* User Card Section */}
      <div className="w-100 fixed-bottom mb-4">
        <UserCard />
      </div>
    </div>
  );
}

export default SideBar;
