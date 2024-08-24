import { useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import ErrorPage from "./ErrorPage";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  function logOut() {
    setUser(null);
    navigate("/");
  }

  if (!user) {
    navigate("/login");
    return <ErrorPage message="Please login to view this page." />;
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

      <div>
        <Button
          label="Log Out"
          bgClass="bg-red-500"
          onClick={logOut}
        />
      </div>
    </div>
  );
}
