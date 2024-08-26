import { FormEvent, useState } from "react";
import { useUserContext } from "../providers/UserProvider";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";
import { IPost } from "../../types";
import Alert from "../containers/Alert";
import useApi from "../../hooks/useApi";
import TextAreaInput from "../inputs/TextAreaInput";

interface ICreatePostFormProps {
  onSuccess: (post: IPost) => void;
}

export default function CreatePostForm({ onSuccess }: ICreatePostFormProps) {
  const { user } = useUserContext();

  const { isFetching, error, dispatch } = useApi<IPost>(
    "http://localhost:8080/api/posts/create",
    "POST",
    onSuccess
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  if (!user) {
    return (
      <div>
        <p className="p-4 text-center">
          You must be logged in to create posts!
        </p>
      </div>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      userId: user?._id,
      title,
      description,
      image,
    });
  }

  return (
    <form
      className="grid gap-4 p-4"
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <TextInput
          id="title"
          value={title}
          label="Title"
          onChange={setTitle}
          required
        />

        <TextAreaInput
          id="description"
          value={description}
          label="Description"
          onChange={setDescription}
          required
        />

        <TextInput
          id="image"
          value={image}
          label="Image"
          type="url"
          onChange={setImage}
        />
      </div>

      {error && (
        <Alert>
          <p>{error}</p>
        </Alert>
      )}

      <div className="grid gap-2">
        <Button
          type="submit"
          label="Create Post"
          colour="green"
          pending={isFetching}
        />
      </div>
    </form>
  );
}
