import { ReactNode, useMemo } from "react";
import Icon from "../icons/Icon";

interface IButtonProps {
  label: ReactNode;
  type?: "submit" | "reset" | "button";
  colour?: "default" | "green" | "red" | "rose";
  disabled?: boolean;
  pending?: boolean;
  className?: string;
  title?: string;
  onClick?: () => void;
}

export default function Button({
  label,
  type = "button",
  colour = "default",
  disabled,
  pending,
  className,
  title,
  onClick,
}: IButtonProps) {
  const colourClass = useMemo(() => {
    switch (colour) {
      case "default":
        return "bg-sky-600 hover:bg-sky-700 border-sky-800/20 disabled:bg-sky-500";
      case "green":
        return "bg-teal-600 hover:bg-teal-700 border-teal-800/20 disabled:bg-teal-500";
      case "red":
        return "bg-red-400 hover:bg-red-500 border-red-600/20 disabled:bg-red-300";
      case "rose":
        return "bg-rose-400 hover:bg-rose-500 border-rose-600/20 disabled:bg-rose-300";
    }
  }, [colour]);

  return (
    <button
      className={`${colourClass} ${className} transition-[background-color,_box-shadow] duration-300 border px-4 py-2 rounded flex items-center justify-end shadow hover:shadow-none disabled:shadow-none`}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled || pending}
    >
      {pending && (
        <Icon
          icon="progress_activity"
          className="animate-spin mr-2"
        />
      )}
      {label}
    </button>
  );
}
