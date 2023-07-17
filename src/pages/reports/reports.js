import React, { useContext } from "react";
import "./reports.css";
import SearchBox from "../../components/searchbox/searchbox";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import ReportComponent from "../../components/common/reportcomponent";

function Reports() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavToggleChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">Reports</div>
          <div className="d-block secondary-color sub-header fw-normal">
            Fast, Effecient and always on time
          </div>
        </div>
        {/* search bar and the icon set*/}
        <div className="d-flex col-6 my-1 justify-content-center align-self-center">
          <SearchBox className="w-auto" />
        </div>
        <div className="d-inline-block col-auto my-1">
          <IconButton
            onClick={() =>
              handleNavToggleChange({
                id: 6,
                key: "calendar",
                icon: <CalendarMonth />,
                item: "Calendar",
              })
            }
          >
            <CalendarMonth />
          </IconButton>
          <IconButton
            onClick={() =>
              handleNavToggleChange({
                id: 5,
                key: "notification",
                icon: <NotificationAdd />,
                item: "Notification",
              })
            }
          >
            <NotificationAdd />
          </IconButton>
        </div>
      </div>

      {/* Body Content of the report section */}
      <div className="row w-100 h-100 ms-2 me-4">
        <div className="col-12">
          <ReportComponent />
        </div>
      </div>
    </div>
  );
}

export default Reports;
