import { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// function createData(
//   item_payer_id,
//   item_purchase_date,
//   item_description,
//   item_amount
// ) {
//   return { item_payer_id, item_purchase_date, item_description, item_amount };
// }

// const rows = [
//   createData(
//     item.payer_id[1],
//     item.purchase_date[1],
//     item.description[1],
//     item.amount[1]
//   ),
//   createData(
//     item.payer_id[2],
//     item.purchase_date[2],
//     item.description[2],
//     item.amount[2]
//   ),
//   createData(
//     item.payer_id[3],
//     item.purchase_date[3],
//     item.description[3],
//     item.amount[3]
//   ),
//   createData(
//     item.payer_id[4],
//     item.purchase_date[4],
//     item.description[4],
//     item.amount[4]
//   ),
// ];

// function createRows(){
// const rows = [];
// for (let i = 0; i < items.length; i++) {
//     rows.push(createData(item.payer_id, item.purchase_date, item.description, item.amount));
// }
// return <tbody>{rows}</tbody>;

export default function PullBankStatements() {
  /* Declaring a variable called error and setting it to null. */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      "http://api.nessieisreal.com/accounts/63703b2078f6910a15f0df8a/purchases?key=a49d1d95d9ef2eeec64c6ef4639add8c"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      // <Box>
      //   <Typography variant="h1">Purchases</Typography>
      //   {items.map((item) => (
      //     <li key={item.payer_id}>
      //       {item.purchase_date}: {item.description}, ${item.amount}
      //     </li>
      //   ))}
      // </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableCell>Purchase Location</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Amount Left</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow
                key={item.pay_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  
                </TableCell>
                <TableCell align="right">${item.amount}</TableCell>
                <TableCell align="right">Amount Left</TableCell>
                <TableCell align="right">yu</TableCell>
                <TableCell align="right">{item.purchase_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
