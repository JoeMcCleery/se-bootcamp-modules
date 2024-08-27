import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { IComment } from "../../types";
import Button from "../inputs/Button";
import Icon from "../icons/Icon";

interface IPostCommentsProps {
  postId: string;
}

export default function PostComments({ postId }: IPostCommentsProps) {
  // Get post comments
  const { result: comments, dispatch } = useApi<IComment[]>(
    `/api/posts/${postId}/comments`,
    "GET"
  );

  // Initial fetch post comments
  useEffect(() => {
    dispatch();
  }, [postId]);

  const label = (
    <>
      <Icon
        icon="chat"
        className="mr-2"
      />
      {comments?.length ?? 0}
    </>
  );

  function onClick() {
    const commentSection = document.getElementById("comments");
    if (!commentSection) return;

    window.scrollTo({
      top: commentSection.offsetTop - 127,
      behavior: "smooth",
    });
  }

  return (
    <Button
      className="rounded-full"
      label={label}
      onClick={onClick}
      title="Go to comments"
      colour="green"
    />
  );
}
