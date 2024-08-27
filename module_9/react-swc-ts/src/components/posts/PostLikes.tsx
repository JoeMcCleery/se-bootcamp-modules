import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { ILike } from "../../types";
import Button from "../inputs/Button";
import { useUserContext } from "../providers/UserProvider";
import Icon from "../icons/Icon";

interface IPostLikesProps {
  postId: string;
}

export default function PostLikes({ postId }: IPostLikesProps) {
  const { user } = useUserContext();

  // Get post likes
  const { result: likes, dispatch } = useApi<ILike[]>(
    `/api/posts/${postId}/likes`,
    "GET"
  );

  // Get user like from post likes
  const userLike = likes?.find((l) => l.userId === user?._id);

  // Create like
  const { dispatch: createLike } = useApi<ILike>(`/api/likes/create`, "POST");

  // Delete like
  const { dispatch: deleteLike } = useApi<ILike>(
    `/api/likes/${userLike?._id}`,
    "DELETE"
  );

  // Initial fetch post likes
  useEffect(() => {
    dispatch();
  }, [postId]);

  // Create or delete a post like for the logged in user
  function toggleLike() {
    if (!user || !likes) return;

    if (userLike) {
      deleteLike().then(() => dispatch());
    } else {
      createLike({
        userId: user._id,
        postId,
      }).then(() => dispatch());
    }
  }

  const label = (
    <>
      <Icon
        icon="favorite"
        className="mr-2"
        filled={userLike !== undefined}
      />
      {likes?.length ?? 0}
    </>
  );

  return (
    <Button
      className="rounded-full"
      label={label}
      onClick={toggleLike}
      title={userLike ? "Unlike post" : "Like post"}
      colour="rose"
      disabled={!user || !likes}
    />
  );
}
