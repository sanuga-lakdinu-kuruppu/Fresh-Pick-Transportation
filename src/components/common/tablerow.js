import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

export const CustomTableRow = styled(TableRow)({
  "&.MuiTableRow-root&.Mui-selected": {
    backgroundColor: "#03A9F4",
    color: "#FFF",
  },

  "&.MuiTableRow-root": {
    backgroundColor: "#EEE",
    color: "000",
  },
});
