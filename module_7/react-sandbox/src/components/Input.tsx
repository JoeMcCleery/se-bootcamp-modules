import { ChangeEventHandler } from "react";

interface IInputProps {
  title: string;
  value?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  title,
  value,
  required,
  onChange,
}: IInputProps) {
  return (
    <input
      className="text-black rounded px-2 py-1"
      title={title}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
