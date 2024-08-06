import Button from "./Button";
import { useUserContext } from "./UserProvider";

const emojis = ["😀", "😄", "😅"];

export default function Emoji() {
  const { state, updateEmoji } = useUserContext();
  const emojiIndex = emojis.indexOf(state.emoji);

  function changeMood() {
    updateEmoji(emojis[(emojiIndex + 1) % emojis.length]);
  }

  return (
    <div className="grid">
      <Button
        label="Change Mood"
        onClick={changeMood}
      />
    </div>
  );
}
