import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import React from "react";
import { SearchMenuData } from "../../utils/constants/uiconstants";

function SearchBox() {
  return (
    <TextField
      id="search-bar"
      className="text"
      label="Search something"
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        sx: { borderRadius: "15px", maxWidth: "250px" },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit" aria-label="search">
              <Search style={{ fill: "blue" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default SearchBox;
