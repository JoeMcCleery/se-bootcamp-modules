import { FormEvent, useState } from "react";
import Button from "../inputs/Button";
import { IComment } from "../../types";
import Alert from "../containers/Alert";
import useApi from "../../hooks/useApi";
import TextAreaInput from "../inputs/TextAreaInput";

interface IAddCommentFormProps {
  userId: string;
  postId: string;
  onSuccess: (comment: IComment) => void;
}

export default function AddCommentForm({
  userId,
  postId,
  onSuccess,
}: IAddCommentFormProps) {
  const { isFetching, error, dispatch } = useApi<IComment>(
    "/api/comments/create",
    "POST",
    success
  );

  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      userId,
      postId,
      message,
    });
  }

  function success(comment: IComment) {
    setMessage("");
    onSuccess(comment);
  }

  return (
    <form
      className="grid gap-2"
      onSubmit={onSubmit}
    >
      <TextAreaInput
        id="message"
        value={message}
        placeholder="Type a comment..."
        onChange={setMessage}
        required
      />

      {error && (
        <Alert>
          <p>{error}</p>
        </Alert>
      )}

      <Button
        type="submit"
        label="Submit Comment"
        colour="green"
        pending={isFetching}
        disabled={!message}
      />
    </form>
  );
}
