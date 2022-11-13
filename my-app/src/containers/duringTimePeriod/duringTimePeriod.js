import { Typography, Box } from "@mui/material";
import PullBankStatements from "../../components/bankroll/Bankroll";
const styles = {
  body: {
    backgroundColor: "#A5CCA4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: `calc(10px + 2vmin)`,
    color: "white",
  },
};
export default function DuringTimePeriod() {
  return (
    <Box sx={styles.body}>
      <Typography variant="h1">Purchases</Typography>
      <PullBankStatements></PullBankStatements>
    </Box>
  );
}
