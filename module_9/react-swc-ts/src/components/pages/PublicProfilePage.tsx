import Card from "../containers/Card";
import Page from "../containers/Page";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { IUser } from "../../types";
import LoadingText from "../pure/LoadingText";

export default function PublicProfilePage() {
  const { id: userId } = useParams();

  const {
    result: user,
    isFetching,
    dispatch,
  } = useApi<IUser>(`/api/users/${userId}`, "GET");

  useEffect(() => {
    dispatch();
  }, [userId]);

  return (
    <Page
      className="grid-cols-1"
      padding
    >
      <h2 className="text-xl text-center">Profile</h2>

      {isFetching ? (
        <LoadingText className="m-auto" />
      ) : (
        user && (
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
          </Card>
        )
      )}
    </Page>
  );
}
