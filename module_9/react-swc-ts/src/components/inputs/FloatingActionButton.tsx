import Icon from "../icons/Icon";
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
      className="aspect-square fixed bottom-3 right-3 rounded-full z-30"
      label={
        <Icon
          icon="close"
          className={`${open ? "rotate-0" : "rotate-45"} transition-transform`}
        />
      }
      title={title}
      colour="green"
      onClick={onClick}
    />
  );
}
