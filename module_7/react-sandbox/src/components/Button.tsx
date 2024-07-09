import { MouseEventHandler } from "react";

interface IButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, onClick }: IButtonProps) {
  return (
    <button
      className="bg-slate-700 px-4 py-1 rounded-full hover:bg-slate-800 transition-all ring-1 ring-slate-400 hover:ring-slate-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
