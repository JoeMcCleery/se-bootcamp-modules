import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import TextInput from "../inputs/TextInput";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [, setUser] = useUserContext();

  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setPending(true);

    const newUser: Partial<IUser> = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        body: JSON.stringify(newUser),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        setError(response.statusText);
        setPending(false);
        return;
      }

      const body = await response.json();

      if (body.result !== 200) {
        setError(body.error);
        setPending(false);
        return;
      }

      setUser(body.data);
      navigate("/profile");
    } catch (e) {
      setError((e as Error).message);
      setPending(false);
    }
  }

  return (
    <form
      className="grid gap-4 p-4"
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
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
      </div>

      {error && (
        <p className="bg-red-400 text-white p-2 rounded text-center">{error}</p>
      )}

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
