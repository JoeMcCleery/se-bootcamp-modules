import { FormEvent, useState } from "react";
import TextInput from "../inputs/TextInput";
import Button from "../inputs/Button";
import { IPost } from "../../types";
import Alert from "../containers/Alert";
import useApi from "../../hooks/useApi";
import TextAreaInput from "../inputs/TextAreaInput";

interface ICreatePostFormProps {
  userId: string;
  onSuccess: (post: IPost) => void;
}

export default function CreatePostForm({
  userId,
  onSuccess,
}: ICreatePostFormProps) {
  const { isFetching, error, dispatch } = useApi<IPost>(
    "/api/posts/create",
    "POST",
    onSuccess
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch({
      userId,
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
