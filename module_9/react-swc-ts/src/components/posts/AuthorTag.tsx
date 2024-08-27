import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { IUser } from "../../types";
import { Link } from "react-router-dom";

interface IAuthorTagProps {
  userId: string;
}

export default function AuthorTag({ userId }: IAuthorTagProps) {
  const { result: user, dispatch } = useApi<IUser>(
    `/api/users/${userId}`,
    "GET"
  );

  useEffect(() => {
    dispatch();
  }, [userId]);

  return (
    <p className="text-sm text-white/80">
      By{" "}
      <Link
        to={`/profile/${userId}`}
        title="Go to user profile"
        className="hover:underline"
      >
        {user && user.username}
      </Link>
    </p>
  );
}
