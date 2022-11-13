import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function CategorySelect() {
  const budgetCategories = [{ label: "Rent" }, { label: "Food" }];
  const [textValue, setTextValue] = useState("");
  const [categoriesArray, setCateArray] = useState("");

  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleSubmit = () => {
    setCateArray((categoriesArray) => [...categoriesArray, textValue]);
  };
  const handleEnter = () => {
    setCateArray((categoriesArray) => [...categoriesArray, textValue]);
  };

  return (
    <Stack sx={{ width: "100%", height: "50%" }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={budgetCategories.map((option) => option.label)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              variant="filled"
              label="Categories"
              placeholder="Enter budget categories"
              onChange={onTextChange}
              value={textValue}
              onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                  handleEnter();
                }
              }}
            />
            <Button
              onClick={handleSubmit}
              sx={{
                width: "100%",
                height: "50px",
              }}
            >
              Submit
            </Button>
          </>
        )}
      />
    </Stack>
  );
}

export default CategorySelect;
