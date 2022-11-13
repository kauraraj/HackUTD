import { Typography } from "@mui/material";
import CategorySelect from "../../components/category/Category";
import { Box } from "@mui/material";
export default function CategoryContainer() {
  return (
    <Box>
      <Typography variant="h2">What are you budgeting for? </Typography>
      <CategorySelect></CategorySelect>
    </Box>
  );
}
