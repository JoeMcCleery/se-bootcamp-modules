import { Navigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

export default function UserPage() {
  const [user] = useUserContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-center">{user.username}</h2>

      <div>
        <p>User info here...</p>
      </div>
    </div>
  );
}
