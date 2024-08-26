import { useUserContext } from "../providers/UserProvider";
import Button from "../inputs/Button";
import ErrorPage from "./ErrorPage";
import Card from "../containers/Card";
import Page from "../containers/Page";

export default function ProfilePage() {
  const { user, logOut } = useUserContext();

  if (!user) {
    return <ErrorPage message="Please login to view this page." />;
  }

  return (
    <Page className="grid-cols-1">
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
          <p className="font-bold">Actions:</p>
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
