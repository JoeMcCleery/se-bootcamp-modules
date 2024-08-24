import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import TextInput from "../inputs/TextInput";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();
  const [pending, setPending] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
        id="email"
        value={email}
        type="email"
        label="Email"
        onChange={setEmail}
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
          label="Sign Up"
          bgClass="bg-emerald-600"
          pending={pending}
        />

        <Button
          type="button"
          label="Login"
          bgClass="bg-slate-400"
          onClick={() => navigate("/login")}
          disabled={pending}
        />
      </div>
    </form>
  );
}
