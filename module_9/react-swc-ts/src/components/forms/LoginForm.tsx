import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types";
import Alert from "../containers/Alert";
import useApi from "../../hooks/useApi";

export default function LoginForm() {
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const { isFetching, error, dispatch } = useApi<IUser>(
    "/api/users",
    "POST",
    (user: IUser) => {
      setUser(user);
      navigate("/profile");
    }
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      username,
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
          label="Login"
          colour="green"
          pending={isFetching}
        />

        <Button
          label="Sign Up"
          onClick={() => navigate("/signup")}
          disabled={isFetching}
        />
      </div>
    </form>
  );
}
