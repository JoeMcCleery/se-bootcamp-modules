import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import TextInput from "../inputs/TextInput";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import Alert from "../containers/Alert";
import useApi from "../../hooks/useApi";

export default function SignUpForm() {
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const { isFetching, error, dispatch } = useApi<IUser>(
    "/api/users/create",
    "POST",
    (user: IUser) => {
      setUser(user);
      navigate("/profile");
    }
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      username,
      email,
      password,
    });
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
        <Alert>
          <p>{error}</p>
        </Alert>
      )}

      <div className="grid gap-2">
        <Button
          type="submit"
          label="Sign Up"
          colour="green"
          pending={isFetching}
        />

        <Button
          label="Login"
          onClick={() => navigate("/login")}
          disabled={isFetching}
        />
      </div>
    </form>
  );
}
