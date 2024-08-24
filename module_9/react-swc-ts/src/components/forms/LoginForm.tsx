import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";

export default function LoginForm() {
  const [user, setUser] = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <form></form>;
}
