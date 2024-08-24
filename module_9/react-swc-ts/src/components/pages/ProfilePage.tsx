import { useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import ErrorPage from "./ErrorPage";
import Card from "../containers/Card";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  function logOut() {
    setUser(null);
    navigate("/login");
  }

  if (!user) {
    navigate("/login");
    return <ErrorPage message="Please login to view this page." />;
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-xl text-center">Your Profile</h2>

      <Card>
        {Object.entries(user).map(([key, val]) => (
          <div
            key={key}
            className="grid p-4"
          >
            <p className="font-bold">{key}:</p>
            <p>{val}</p>
          </div>
        ))}
      </Card>

      <div className="grid w-80">
        <Button
          label="Log Out"
          bgClass="bg-red-500"
          onClick={logOut}
        />
      </div>
    </div>
  );
}
