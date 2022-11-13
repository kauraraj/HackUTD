import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

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
      <Box>
        <Typography variant="h1">Purchases</Typography>
        {items.map((item) => (
          <li key={item.payer_id}>
            {item.purchase_date}: {item.description}, ${item.amount}
          </li>
        ))}
      </Box>
    );
  }
}
