import { ChangeEventHandler } from "react";

interface IInputProps {
  title: string;
  type?: "text" | "number";
  value?: string;
  required?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  title,
  type,
  value,
  required,
  className,
  onChange,
}: IInputProps) {
  return (
    <input
      className={`text-slate-900 rounded-full px-2 py-1 ${className}`}
      type={type}
      title={title}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
