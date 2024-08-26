import { useNavigate } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import ErrorPage from "./ErrorPage";
import Card from "../containers/Card";
import Page from "../containers/Page";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useUserContext();

  function logOut() {
    setUser(null);
    navigate("/login");
  }

  if (!user) {
    return <ErrorPage message="Please login to view this page." />;
  }

  return (
    <Page className="justify-center">
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

      <Button
        label="Log Out"
        colour="red"
        className="w-80"
        onClick={logOut}
      />
    </Page>
  );
}
