import { useUserContext } from "./UserProvider";
import Button from "./Button";

export default function ContextWork() {
  const { currentUser, setCurrentUser } = useUserContext();

  return (
    <div>
      <p>{currentUser.name}</p>
      <Button
        label="Change User"
        onClick={() => setCurrentUser({ name: "Bob" })}
      />
    </div>
  );
}
