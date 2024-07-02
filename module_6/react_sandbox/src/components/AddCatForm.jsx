import { useState } from "react";
import TextInput from "./TextInput";

export default function AddCatForm({ onAddCat }) {
  const [id] = useState(crypto.randomUUID());
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    onAddCat({ id: crypto.randomUUID(), name, latinName, imgSrc });
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
        onChange={setName}
      />

      <TextInput
        label={"Latin Name: "}
        id={`${id}-latinName`}
        name={"latinName"}
        value={latinName}
        onChange={setLatinName}
      />

      <TextInput
        label={"Image URL: "}
        id={`${id}-imgSrc`}
        name={"imgSrc"}
        value={imgSrc}
        onChange={setImgSrc}
      />

      <button>Submit</button>
    </form>
  );
}
