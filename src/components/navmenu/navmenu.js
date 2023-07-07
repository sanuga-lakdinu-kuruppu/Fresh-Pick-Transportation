//Navigation Menu
import React, { useContext } from "react";
import { ToggleButtonGroup } from "@mui/material";
import NavToggleButton from "../common/navitemtogglebutton";
import { NavContext } from "../../context/navcontext";
import { NavMenuData } from "../../utils/constants/uiconstants";
import { useNavigate } from "react-router-dom";

function NavMenu() {
  //Use Gloable Nav Context
  const { navSelected, setNavSelected } = useContext(NavContext);
  const navigate = useNavigate();
  //navigation from the menu
  const handleNavToggleChange = (event, value) => {
    setNavSelected(value);
    navigate(value);
  };
  return (
    // Nav menu items
    <ToggleButtonGroup
      value={navSelected}
      onChange={handleNavToggleChange}
      orientation="vertical"
      color="primary"
      fullWidth={true}
      defaultValue={navSelected}
      exclusive
    >
      {NavMenuData.map((menuitem) => {
        return (
          <NavToggleButton key={menuitem.key} value={menuitem.key}>
            <div className="w-100 h-100">
              <div className="d-inline-block w-auto float-start">
                {menuitem.icon}
              </div>
              <div className="d-inline-block w-auto ms-2 float-start">
                <span className="nav-menu-text">{menuitem.item}</span>
              </div>
            </div>
          </NavToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}

export default NavMenu;
