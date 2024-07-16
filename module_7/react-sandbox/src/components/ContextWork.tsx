import { useEffect } from "react";
import { useUserContext } from "./UserProvider";

export default function ContextWork() {
  const { currentUser, setCurrentUser } = useUserContext();

  useEffect(() => {
    setCurrentUser("test");
    console.log("test");
  }, []);

  return <div>{currentUser}</div>;
}
