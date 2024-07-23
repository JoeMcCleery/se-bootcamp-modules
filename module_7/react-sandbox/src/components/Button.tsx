import { MouseEventHandler } from "react";

interface IButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, type, onClick }: IButtonProps) {
  return (
    <button
      type={type || "button"}
      className="bg-slate-800 px-4 py-1 rounded-full hover:bg-slate-900 transition-all ring-1 ring-slate-400/50"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
