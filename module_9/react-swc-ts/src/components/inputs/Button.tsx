import { useMemo } from "react";
import SpinnerIcon from "../icons/SpinnerIcon";

interface IButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  colour?: "default" | "green" | "red";
  disabled?: boolean;
  pending?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  label,
  type = "button",
  colour = "default",
  disabled,
  pending,
  className,
  onClick,
}: IButtonProps) {
  const colourClass = useMemo(() => {
    switch (colour) {
      case "default":
        return "bg-sky-600 hover:bg-sky-700 border-sky-800/20";
      case "green":
        return "bg-teal-600 hover:bg-teal-700 border-teal-800/20";
      case "red":
        return "bg-red-400 hover:bg-red-500 border-red-600/20";
    }
  }, [colour]);

  return (
    <button
      className={`${colourClass} ${className} transition-[background-color,_box-shadow] duration-300 border px-4 py-2 rounded flex items-center justify-end shadow hover:shadow-none`}
      type={type}
      onClick={onClick}
      disabled={disabled || pending}
    >
      {pending && <SpinnerIcon />}
      {label}
    </button>
  );
}
