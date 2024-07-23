import { useUserContext } from "./UserProvider";
import Button from "./Button";
import { useState } from "react";

export default function ContextWork() {
  const { state, updateUser, toggleMode } = useUserContext();
  const [username, setUsername] = useState(state.user.name);

  return (
    <div>
      <p>{state.user.name}</p>
      <p>{state.mode}</p>
      <input
        title="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="text-black"
      />
      <Button
        label="Change User"
        onClick={() => updateUser({ name: username })}
      />
      <Button
        label="Toggle Mode"
        onClick={toggleMode}
      />
    </div>
  );
}
