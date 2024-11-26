import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function InputAdornments() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          label="Column"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SwapVertIcon />
                </InputAdornment>
              ),
            },
          }}
        />{" "}
      </div>
    </Box>
  );
}
