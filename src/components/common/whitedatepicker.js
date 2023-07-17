import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const whiteDatePicker = styled(DatePicker)({
  "& .MuiInputBase-root": {
    height: "30px",
    fontSize: "12px",
    color: "#EEE",
    minWidth: "130px",
  },
  "& .MuiSvgIcon-root": {
    color: "#EEE",
    width: "15px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#EEE",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#FFF",
    color: "#FFF",
  },
});
export const WhiteDatePicker = whiteDatePicker;
