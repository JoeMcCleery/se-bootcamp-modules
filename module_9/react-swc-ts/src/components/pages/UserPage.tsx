import { Navigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";

export default function UserPage() {
  const [user] = useUserContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl text-center">Your Profile</h2>

      <div>
        {Object.entries(user).map(([key, val]) => (
          <div
            key={key}
            className="flex gap-2"
          >
            <p className="font-bold">{key}:</p>
            <p>{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
