import { useState } from "react";
import Modal from "../containers/Modal";
import FloatingActionButton from "./FloatingActionButton";
import Card from "../containers/Card";
import CreatePostForm from "../forms/CreatePostForm";

export default function CreatePostButton() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((o) => !o);
  }

  function closeModal() {
    setOpen(false);
  }

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
            <CreatePostForm onSuccess={closeModal} />
          </Card>
        </div>
      </Modal>
    </>
  );
}
