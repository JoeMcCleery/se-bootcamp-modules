interface ITextInputProps {
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: (newValue: string) => void;
}

export default function TextInput({
  id,
  value,
  label,
  placeholder,
  type,
  required,
  onChange,
}: ITextInputProps) {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="transition-[box-shadow] hover:shadow-none duration-300 rounded py-1 px-2 ring-1 ring-slate-500/20 shadow text-slate-600"
        id={id}
        value={value}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
