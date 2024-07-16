import { useUserContext } from "./UserProvider";
import Button from "./Button";

export default function ContextWork() {
  const { currentUser, setCurrentUser } = useUserContext();

  return (
    <div>
      <p>{currentUser}</p>
      <Button
        label="Change User"
        onClick={() => setCurrentUser("Bob")}
      />
    </div>
  );
}
