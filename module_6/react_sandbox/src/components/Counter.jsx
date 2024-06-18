import { useState } from "react";

export default function Counter({ label }) {
  const [count, setCount] = useState(0);
  const id = crypto.randomUUID();

  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <button
        id={id}
        onClick={() => setCount((c) => c + 1)}
      >
        count: {count}
      </button>
    </>
  );
}
