import { useState } from "react";
import TextInput from "./TextInput";

export default function AddCatForm({ onListUpdated }) {
  const [id] = useState(crypto.randomUUID());
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const newCat = { id: crypto.randomUUID(), name, latinName, imgSrc };
    onListUpdated([...onListUpdated, newCat]);
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "grid", gap: "1em", marginBottom: "2em" }}
    >
      <TextInput
        label={"Name: "}
        id={`${id}-name`}
        name={"name"}
        value={name}
        onChange={(v) => setName(v)}
      />

      <TextInput
        label={"Latin Name: "}
        id={`${id}-latinName`}
        name={"latinName"}
        value={latinName}
        onChange={(v) => setLatinName(v)}
      />

      <TextInput
        label={"Image URL: "}
        id={`${id}-imgSrc`}
        name={"imgSrc"}
        value={imgSrc}
        onChange={(v) => setImgSrc(v)}
      />

      <button>Submit</button>
    </form>
  );
}
