import { useEffect, useState } from "react";

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
      <label
        id="currency"
        title="currency"
      >
        Choose currency:
        <select
          name="currency"
          title="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="text-zinc-900 ml-1 rounded-full px-1"
        >
          {options}
        </select>
      </label>

      {loading ? (
        <svg
          className="animate-spin h-5 w-5 block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <p>1₿ = {formatter.format(price)}</p>
      )}
    </div>
  );
}
