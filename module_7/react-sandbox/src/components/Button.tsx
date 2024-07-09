import { MouseEventHandler } from "react";

interface IButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ label, onClick }: IButtonProps) {
  return (
    <button
      className="bg-slate-600 px-4 py-1 rounded-full hover:bg-slate-700 transition-colors ring-1 ring-slate-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
