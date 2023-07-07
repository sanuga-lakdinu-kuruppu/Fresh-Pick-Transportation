import React from "react";
import "./reports.css";
import SearchBox from "../../components/searchbox/searchbox";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Reports() {
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
          <IconButton>
            <CalendarMonth />
          </IconButton>
          <IconButton>
            <NotificationAdd />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Reports;
