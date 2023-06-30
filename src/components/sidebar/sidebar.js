import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToggleButtonGroup } from "@mui/material";
import NavToggleButton from "../common/navitemtogglebutton";
import GridViewIcon from "@mui/icons-material/GridView";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import PaymentIcon from "@mui/icons-material/Payment";
import PollIcon from "@mui/icons-material/Poll";

function SideBar() {
  // Nav bar
  const [navSelected, setNavSelected] = React.useState("");
  const handleNavToggleChange = (event, value) => {
    setNavSelected(value);
    console.log(value);
  };

  const theme = createTheme({});

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-light col-auto col-md-3 min-vh-100">
          {/* Application Logo */}
          <a
            href="#"
            className="text-decoration-none d-flex justify-content-center align-items-center py-5 mb-5"
          >
            <img src={LOGO_X64} alt="Project Logo" />
            <div className="ms-2">
              <div className="ms-2 mw-100 fs-5 fw-bolder text-primary">
                FreshPick
              </div>
              <div className="ms-2 fs-6 text-secondary">
                Where farming meets retails
              </div>
            </div>
          </a>

          {/* Nav bar of the application */}
          <ul className="nav nav-pills mx-4 my-4">
            <ThemeProvider theme={theme}>
              <ToggleButtonGroup
                value={navSelected}
                onChange={handleNavToggleChange}
                orientation="vertical"
                color="primary"
                fullWidth={true}
                exclusive
              >
                <NavToggleButton value="dashboard" aria-label="list">
                  <GridViewIcon />
                  Dashboard
                </NavToggleButton>
                <NavToggleButton value="ride" aria-label="module">
                  <FireTruckIcon />
                  Rides
                </NavToggleButton>
                <NavToggleButton value="payment" aria-label="quilt">
                  <PaymentIcon />
                  Payments
                </NavToggleButton>
                <NavToggleButton value="report" aria-label="quilt">
                  <PollIcon />
                  Reports
                </NavToggleButton>
              </ToggleButtonGroup>
            </ThemeProvider>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
