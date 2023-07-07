import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

const defaultdatepicker = styled(DatePicker)({
  "& .MuiInputBase-root": {
    height: "30px",
    fontSize: "12px",
    color: "#2196f3",
    minWidth: "130px",
  },
  "& .MuiSvgIcon-root": {
    color: "#2196f3",
    width: "15px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2196f3",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2980b9",
  },
});
export const DefaultDatePicker = defaultdatepicker;
