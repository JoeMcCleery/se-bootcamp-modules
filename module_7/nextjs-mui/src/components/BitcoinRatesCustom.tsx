"use client";

import { useEffect, useReducer, useState } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface IConversionResult {
  loading: boolean;
  price: string;
  error: string;
}
interface IAction {
  type: "FETCH" | "SUCCESS" | "ERROR";
  payload: string;
}
type Currency = "USD" | "AUD" | "NZD" | "GBP" | "EUR" | "SGD";

const currencies: Currency[] = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const options = currencies.map((curr) => (
  <MenuItem
    value={curr}
    key={curr}
  >
    {curr}
  </MenuItem>
));

function reducer(
  _result: IConversionResult,
  action: IAction
): IConversionResult {
  switch (action.type) {
    case "FETCH":
      return { loading: true, price: "", error: "" };
    case "SUCCESS":
      return { loading: false, price: action.payload, error: "" };
    case "ERROR":
      return { loading: false, price: "", error: action.payload };
  }
}

function useConversion(currency: Currency) {
  const [result, dispatch] = useReducer(reducer, {
    loading: true,
    price: "",
    error: "",
  });

  useEffect(() => {
    let ignore = false;

    dispatch({ type: "FETCH", payload: "" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (ignore) return;
        dispatch({
          type: "SUCCESS",
          payload: json["bitcoin"][currency.toLowerCase()],
        });
      })
      .catch(() =>
        dispatch({ type: "ERROR", payload: "Oopsie. Something went wrong!" })
      );

    return () => {
      ignore = true;
    };
  }, [currency]);

  return result;
}

export default function BitcoinRatesCustom() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [count, setCount] = useState("1");
  const { loading, price, error } = useConversion(currency);

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h3">Bitcoin Exchange Rate</Typography>

      <TextField
        label="BTC Count"
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="currency-dropdown">Age</InputLabel>
        <Select
          labelId="currency-dropdown"
          id="currency-dropdown"
          value={currency}
          label="Target Currency"
          onChange={(e) => setCurrency(e.target.value as Currency)}
        >
          {options}
        </Select>
      </FormControl>

      {error ? (
        <Typography color="error">{error}</Typography>
      ) : loading ? (
        <CircularProgress />
      ) : (
        <Typography>
          BTC {count} = {formatter.format(parseInt(price) * parseFloat(count))}
        </Typography>
      )}
    </Box>
  );
}
