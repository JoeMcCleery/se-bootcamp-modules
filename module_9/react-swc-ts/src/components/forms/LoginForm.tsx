import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();
  const [pending, setPending] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPending(true);
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={onSubmit}
    >
      <TextInput
        id="username"
        value={username}
        label="Username"
        onChange={setUsername}
        required
      />

      <TextInput
        id="password"
        value={password}
        label="Password"
        type="password"
        onChange={setPassword}
        required
      />

      <div className="grid gap-2">
        <Button
          type="submit"
          label="Login"
          bgClass="bg-emerald-600"
          pending={pending}
        />

        <Button
          type="button"
          label="Sign Up"
          bgClass="bg-slate-400"
          onClick={() => navigate("/signup")}
          disabled={pending}
        />
      </div>
    </form>
  );
}
