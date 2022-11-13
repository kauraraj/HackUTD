import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";

export const CostForm = (props) => {
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");

  return (
    <Paper sx={{ margin: "10px" }}>
      <TextField
        onChange={onTextChange}
        value={textValue}
        label={props.categoryName} //optional
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
