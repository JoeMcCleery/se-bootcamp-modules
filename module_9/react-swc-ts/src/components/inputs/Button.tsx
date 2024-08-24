import Spinner from "../../assets/spinner.svg?react";

interface IButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  bgClass?: string;
  disabled?: boolean;
  pending?: boolean;
  onClick?: () => void;
}

export default function Button({
  label,
  type,
  bgClass,
  disabled,
  pending,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={`${
        bgClass ? bgClass : "bg-sky-600"
      } px-4 py-2 rounded text-white flex items-center justify-end`}
      type={type}
      onClick={onClick}
      disabled={disabled || pending}
    >
      {pending && <Spinner className="h-5 w-5 mr-2 animate-spin" />}
      {label}
    </button>
  );
}
