// Custom Button
import { Button, styled } from "@mui/material";

const defaultBtn = styled(Button)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "#2196F3",
  borderRadius: "20px",
  padding: "5px 10px",
  "&:hover": {
    backgroundColor: "#2980b9",
  },
}));

export const DefaultButton = defaultBtn;
