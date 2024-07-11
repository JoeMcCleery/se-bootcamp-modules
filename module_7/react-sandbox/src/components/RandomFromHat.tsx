import { useState } from "react";
import Button from "./Button";

const items = ["Beach Bar", "St Brigids", "Skol", "Corner Dairy"];

export default function RandomFromHat() {
  const [index, setIndex] = useState(-1);

  function pickRandom() {
    setIndex(Math.floor(Math.random() * items.length));
  }

  return (
    <div className="flex flex-col gap-1">
      <Button
        label="Pull from hat!"
        onClick={pickRandom}
      />

      {index > -1 && <p className="text-center">{items[index]}</p>}
    </div>
  );
}
