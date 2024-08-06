import { useUserContext } from "./UserProvider";
import Button from "./Button";
import { FormEvent, useState } from "react";
import Input from "./Input";

export default function ContextWork() {
  const { updateUser, toggleMode } = useUserContext();
  const [username, setUsername] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateUser({ name: username });
  }

  return (
    <div className="grid gap-2">
      <form
        onSubmit={submit}
        className="grid gap-2"
      >
        <Input
          title="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />

        <Button
          type="submit"
          label="Change User"
        />
      </form>

      <Button
        label="Toggle Mode"
        onClick={toggleMode}
      />
    </div>
  );
}
