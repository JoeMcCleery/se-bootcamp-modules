import { useState } from "react";
import Modal from "../containers/Modal";
import FloatingActionButton from "./FloatingActionButton";
import Card from "../containers/Card";
import CreatePostForm from "../forms/CreatePostForm";
import { useUserContext } from "../providers/UserProvider";

interface ICreatePostButtonProps {
  onPostCreated: () => void;
}

export default function CreatePostButton({
  onPostCreated,
}: ICreatePostButtonProps) {
  const { user } = useUserContext();

  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((o) => !o);
  }

  function closeModal() {
    setOpen(false);
  }

  function postCreated() {
    closeModal();
    onPostCreated();
  }

  if (!user) return null;

  return (
    <>
      <FloatingActionButton
        title={open ? "Close" : "Create post"}
        open={open}
        onClick={toggleOpen}
      />

      <Modal
        open={open}
        onClose={closeModal}
      >
        <div className="space-y-4 grow max-w-80">
          <p className="text-xl text-center">Create Post</p>

          <Card>
            <CreatePostForm
              userId={user._id}
              onSuccess={postCreated}
            />
          </Card>
        </div>
      </Modal>
    </>
  );
}
