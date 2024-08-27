import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import ErrorPage from "./ErrorPage";
import Card from "../containers/Card";
import Page from "../containers/Page";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, logOut } = useUserContext();

  if (!user) {
    return <ErrorPage message="Please login to view this page." />;
  }

  return (
    <Page
      className="grid-cols-1"
      padding
    >
      <h2 className="text-xl text-center">Your Profile</h2>

      <Card className="max-w-80 w-full m-auto">
        {Object.entries(user).map(([key, val]) => (
          <div
            key={key}
            className="grid p-4"
          >
            <p className="font-bold">{key}:</p>
            <p>{val}</p>
          </div>
        ))}

        <div className="p-4 space-y-2">
          <h3 className="font-bold">Actions:</h3>

          <Button
            label="View Public Profile"
            className="w-full"
            onClick={() => navigate(`/profile/${user._id}`)}
          />
          <Button
            label="Log Out"
            colour="red"
            className="w-full"
            onClick={logOut}
          />
        </div>
      </Card>
    </Page>
  );
}
