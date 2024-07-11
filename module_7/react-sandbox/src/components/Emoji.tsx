import { useState, createContext, PropsWithChildren, useContext } from "react";
import Button from "./Button";

const EmojiContext = createContext("");

const emojis = ["😀", "😄", "😅"];

export default function Emoji({ children }: PropsWithChildren) {
  const [index, setIndex] = useState(0);

  function changeMood() {
    setIndex((index + 1) % emojis.length);
  }

  return (
    <div className="grid gap-1">
      <Button
        label="Change Mood"
        onClick={changeMood}
      />

      <EmojiContext.Provider value={emojis[index]}>
        <div className="grid gap-1">{children}</div>
      </EmojiContext.Provider>
    </div>
  );
}

export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
