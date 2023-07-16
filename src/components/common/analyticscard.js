import { Card, CardActions, CardContent } from "@mui/material";
import React from "react";
import { DefaultButton } from "./defaultbtn";
import { LOGO_X64 } from "../../utils/constants/configconstants";
import "../../assets/styles/analyticcardstyles.css";

function AnalyticCard(props) {
  return (
    <Card
      sx={{
        minWidth: 150,
        width: props.cardWidth,
        height: props.cardHeight,
        boxShadow: "none",
        background: `linear-gradient(${props.gradientAngle}, ${props.fromColor}, ${props.toColor})`,
        borderRadius: 5,
      }}
    >
      <CardContent>
        <div className="">
          <div className="d-inline-block align-top card-define">
            <img
              className="my-1 mx-1 align-top analytic-card-image"
              src={props.image}
              alt="Analytics"
            />
          </div>
          <div className="d-inline-block align-top ms-2 text-wrap w-50">
            <div className="card-header fw-medium text-white fw-semibold lh-sm">
              {props.header}
            </div>
            <div className="card-value fw-bold text-white">{props.value}</div>
          </div>
        </div>
        <DefaultButton>More</DefaultButton>
      </CardContent>
    </Card>
  );
}

export default AnalyticCard;
