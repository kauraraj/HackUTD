import React from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CategorySelect from "../../components/category/Category";
import { Box } from "@mui/material";
import { CostForm } from "../../components/inputForm/inputForm";
const styles = {
  budget: {
    backgroundColor: "#1245ab",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `calc(10px + 2vmin)`,
    color: "white",
  },
  income: {
    backgroundColor: "#1245ab",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `calc(10px + 2vmin)`,
    color: "white",
  },
  timetrack: {
    backgroundColor: "#1245ab",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `calc(10px + 2vmin)`,
    color: "white",
  },
  timeForm: {
    backgroundColor: "white",
    width: "500px",
    color: "black",
  },
};
export default function CategoryContainer() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={styles.income}>
        <Typography variant="h2">
          What is your planned spending amount?
        </Typography>
        <CostForm></CostForm>
      </Box>
      <Box sx={styles.timetrack}>
        <Typography variant="h2">How long do you want to track?</Typography>
        <FormControl sx={styles.timeForm}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            defaultValue={"biweekly"}
            label="Time Period"
            onChange={handleChange}
          >
            <MenuItem value={"weekly"}>Weekly</MenuItem>
            <MenuItem value={"biweekly"}>Biweekly</MenuItem>
            <MenuItem value={"monthy"}>Monthly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={styles.budget}>
        <Typography variant="h2">What are you budgeting for?</Typography>
        <CategorySelect></CategorySelect>
      </Box>
    </>
  );
}
