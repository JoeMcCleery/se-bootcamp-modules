import { useState } from "react";

const emojis = ["😀", "😄", "😅"];

export default function Emoji() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div>{emojis[index]}</div>
      <button onClick={() => setIndex((index + 1) % emojis.length)}>
        Change Mood
      </button>
    </div>
  );
}
