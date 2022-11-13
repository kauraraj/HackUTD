import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { CostForm } from "../inputForm/inputForm";
const styles = {
  textBox: {
    width: "500px",
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "grey",
    width: "500px",
    height: "50px",
    color: "black",
  },
};
function CategorySelect() {
  const budgetCategories = [{ label: "Rent" }, { label: "Food" }];
  const [textValue, setTextValue] = useState("");
  const [categoriesArray, setCateArray] = useState([]);

  const onTextChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleSubmit = () => {
    setCateArray((categoriesArray) => [...categoriesArray, textValue]);
    setTextValue("");
  };
  const handleEnter = () => {
    setCateArray((categoriesArray) => [...categoriesArray, textValue]);
  };

  return (
    <div width="100%" height="100%" align="center">
      <Stack
        sx={{ width: "75%", height: "50%", margin: "20px", align: "center" }}
      >
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
                sx={styles.textBox}
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
              <Button onClick={handleSubmit} sx={styles.btn}>
                Submit
              </Button>
            </>
          )}
        />
      </Stack>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        {categoriesArray.map((category) => (
          <Grid xs={4}>
            <CostForm categoryName={category}></CostForm>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CategorySelect;
