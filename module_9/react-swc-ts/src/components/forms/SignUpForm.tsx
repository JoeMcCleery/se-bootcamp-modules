import { useState } from "react";
import { useUserContext } from "../providers/UserProvider";

export default function SignUpForm() {
  const [user, setUser] = useUserContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <form></form>;
}
