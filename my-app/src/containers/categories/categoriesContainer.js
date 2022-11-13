import { Typography } from "@mui/material";
import CategorySelect from "../../components/category/Category";
import { Box } from "@mui/material";
const styles = {
  body: {
    backgroundColor: "#1245ab",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `calc(10px + 2vmin)`,
    color: "white",
  },
};
export default function CategoryContainer() {
  return (
    <Box sx={styles.body}>
      <Typography variant="h2">What are you budgeting for? </Typography>
      <CategorySelect></CategorySelect>
    </Box>
  );
}
