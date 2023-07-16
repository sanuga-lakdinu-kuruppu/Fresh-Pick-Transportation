import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";

function SearchField(props) {
  return (
    <FormControl id="dashboard-search-field">
      <TextField
        className="text"
        label="Search here"
        variant="outlined"
        size="small"
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
        InputProps={{
          type: "search",
          style: {
            minWidth: 200,
            maxWidth: 250,
            maxHeight: 40,
            borderRadius: 75,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <Search style={{ fill: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default SearchField;
