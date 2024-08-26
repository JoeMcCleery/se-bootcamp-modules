import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";

interface IFloatingActionButtonProps {
  title: string;
  open: boolean;
  onClick: () => void;
}

export default function FloatingActionButton({
  title,
  open,
  onClick,
}: IFloatingActionButtonProps) {
  return (
    <Button
      className="aspect-square fixed bottom-4 right-4 rounded-full z-10"
      label={
        <CloseIcon
          className={`${open ? "rotate-0" : "rotate-45"} transition-transform`}
        />
      }
      title={title}
      colour="green"
      onClick={onClick}
    />
  );
}
