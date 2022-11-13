import { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PullBankStatements() {
  /* Declaring a variable called error and setting it to null. */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [merchantVendors, setMerchant] = useState([]);
  const [items, setItems] = useState([]);
  const totalCategories = [50, 400, 100];

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
          result.map(
            async (re) => {
              const res = await fetch(
                "http://api.nessieisreal.com/merchants/" +
                  re.merchant_id +
                  "?key=a49d1d95d9ef2eeec64c6ef4639add8c"
              );
              const merchants = await res.json();
              setMerchant((merchantVendors) => [...merchantVendors, merchants]); // how to connect and map it to the others?
            },
            (error) => {
              setIsLoaded(false);
              setError(error);
            }
          );
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

  var combo = items.map(function (e, i) {
    return [items[i], merchantVendors[i], totalCategories[i]];
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
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
            {/* Need to enable showing based on time-period */}
            {combo.map((item) => (
              <TableRow
                key={item[0].pay_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {/* {item[1].name} */}
                  TBD
                </TableCell>
                <TableCell align="right">${item[0].amount}</TableCell>
                <TableCell align="right">{item[0].description}</TableCell>
                <TableCell align="right">{item[2] - item[0].amount}</TableCell>
                <TableCell align="right">{item[0].purchase_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
