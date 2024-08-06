import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let intervalId: number;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(tick, 1000);
    }, 1000 - (Date.now() % 1000));

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  function tick() {
    setDate(new Date());
  }

  return <p className="text-center">Time: {date.toLocaleTimeString()}</p>;
}
