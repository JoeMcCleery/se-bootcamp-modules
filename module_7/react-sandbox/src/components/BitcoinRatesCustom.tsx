import { useEffect, useReducer, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Input from "./Input";

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
  <option
    value={curr}
    key={curr}
  >
    {curr}
  </option>
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
    <div className="flex flex-col gap-1">
      <h3 className="font-bold text-3xl">Bitcoin Exchange Rate (Custom)</h3>

      <label>
        BTC Count:
        <Input
          title="BTC Count"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="ml-1"
        />
      </label>

      <label>
        Choose target currency:
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
          className="text-slate-900 ml-1 rounded-full px-1"
        >
          {options}
        </select>
      </label>

      {error ? (
        <p className="text-red-300">{error}</p>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <p>
          BTC {count} = {formatter.format(parseInt(price) * parseFloat(count))}
        </p>
      )}
    </div>
  );
}
