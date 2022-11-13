import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";

export const FormWithoutHookForm = () => {
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");

  return (
    <Paper>
      <h2>Form Demo</h2>

      <TextField
        onChange={onTextChange}
        value={textValue}
        label={"Text Value"} //optional
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Button onClick={handleReset}>Reset</Button>
    </Paper>
  );
};
