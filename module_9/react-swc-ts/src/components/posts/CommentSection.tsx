import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { IComment } from "../../types";
import LoadingText from "../pure/LoadingText";
import Comment from "./Comment";
import { useUserContext } from "../providers/UserProvider";
import AddCommentForm from "../forms/AddCommentForm";

interface ICommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: ICommentSectionProps) {
  const { user } = useUserContext();

  // Get post comments
  const {
    result: comments,
    isFetching,
    dispatch,
  } = useApi<IComment[]>(`/api/posts/${postId}/comments`, "GET");

  // Initial fetch post comments
  useEffect(() => {
    dispatch();
  }, [postId]);

  return (
    <div className="grid p-4 gap-4">
      <h3 className="text-center text-lg">Comments</h3>

      {user && (
        <AddCommentForm
          userId={user._id}
          postId={postId}
          onSuccess={() => dispatch()}
        />
      )}

      {isFetching ? (
        <LoadingText className="m-auto" />
      ) : !comments || comments.length === 0 ? (
        <p className="text-center">No comments...</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
          />
        ))
      )}
    </div>
  );
}
