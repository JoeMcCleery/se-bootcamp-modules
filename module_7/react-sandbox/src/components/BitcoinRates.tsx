import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Input from "./Input";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const options = currencies.map((curr) => (
  <option
    value={curr}
    key={curr}
  >
    {curr}
  </option>
));

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState("1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (ignore) return;
        setLoading(false);
        setPrice(parseInt(json["bitcoin"][currency.toLowerCase()]));
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-bold text-3xl">Bitcoin Exchange Rate</h3>

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
          onChange={(e) => setCurrency(e.target.value)}
          className="text-slate-900 ml-1 rounded-full px-1"
        >
          {options}
        </select>
      </label>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <p>
          BTC {count} = {formatter.format(price * parseFloat(count))}
        </p>
      )}
    </div>
  );
}
