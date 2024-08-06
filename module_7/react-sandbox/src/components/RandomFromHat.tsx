import { useState } from "react";
import Button from "./Button";

const items = ["Beach Bar", "St Brigids", "Skol", "Corner Dairy"];

export default function RandomFromHat() {
  const [index, setIndex] = useState(-1);

  function pickRandom() {
    const newIndex = Math.floor(Math.random() * items.length);

    if (newIndex == index) {
      pickRandom();
    } else {
      setIndex(newIndex);
    }
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
