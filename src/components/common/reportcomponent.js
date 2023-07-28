import { Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import report_warranty_img from "../../assets/graphics/images/report_imgs/report_warranty_img.png";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DefaultDatePicker } from "./defaultdatepicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { WhiteDatePicker } from "./whitedatepicker";
import { DefaultButton } from "./defaultbtn";
import fast_man_img from "../../assets/graphics/images/report_imgs/fast.png";
import "../../assets/styles/reportcomponentstyles.css";

function ReportComponent(props) {
  // Date Picker Values
  const today = dayjs(dayjs().format("YYYY-MM-DD").toString());
  const [fromDateValue, setFromDateValue] = useState(today);
  const [toDateValue, setToDateValue] = useState(today);
  return (
    <Card
      sx={{
        minWidth: "100%",
        width: props.cardWidth,
        height: props.cardHeight,
        boxShadow: "none",
        background: `linear-gradient(${props.gradientAngle},${props.fromColor}, ${props.toColor})`,
        borderRadius: 5,
      }}
    >
      <CardContent>
        <div className="row">
          {/* Left side content */}
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div className="h2 text-white mt-1">{props.cardHeader}</div>
              <div className="">
                <img src={props.iconImage} className="" />
              </div>
            </div>
            <div className="h6 text-white mt-3">{props.cardDescription}</div>
            <div className="mt-4 mb-3 d-flex">
              <div className="d-flex align-items-center me-4">
                <div className="sub-header me-2 w-auto fw-bold text-white">
                  From
                </div>
                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                  <WhiteDatePicker
                    className=""
                    label=""
                    value={fromDateValue}
                    onChange={(value) => setFromDateValue(value)}
                    format="DD-MMMM-YYYY"
                  />
                </LocalizationProvider>
              </div>
              <div className="d-flex align-items-center">
                <div className="sub-header me-2 w-auto fw-bold text-white">
                  To
                </div>
                <LocalizationProvider className="" dateAdapter={AdapterDayjs}>
                  <WhiteDatePicker
                    className=""
                    label=""
                    value={toDateValue}
                    onChange={(value) => setToDateValue(value)}
                    format="DD-MMMM-YYYY"
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          {/* Middle button */}
          <div className="col-3">
            <div className="d-flex justify-content-center align-items-end h-100 pb-3">
              <DefaultButton sx={{ padding: "8px 20px" }}>
                Generate
              </DefaultButton>
            </div>
          </div>
          <div className="col-3">
            <img src={props.sideImage} className="report-component-side-img" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReportComponent;
