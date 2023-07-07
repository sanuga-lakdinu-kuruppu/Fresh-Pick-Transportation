//Navigation Menu Toggle Button
import { ToggleButton, styled } from "@mui/material";

//Custom Nav Toggle Button
const NavToggleButton = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#2196F3",
    border: "unset !important",
  },
  "&.MuiToggleButtonGroup-grouped": {
    borderRadius: "35px !important",
    border: "unset !important",
  },
});

export default NavToggleButton;
