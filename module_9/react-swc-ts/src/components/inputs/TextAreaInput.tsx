interface ITextAreaInputProps {
  id: string;
  value: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  onChange: (newValue: string) => void;
}

export default function TextAreaInput({
  id,
  value,
  label,
  placeholder,
  required,
  onChange,
}: ITextAreaInputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id}>
          {label}
          {required && "*"}
        </label>
      )}
      <textarea
        className="transition-[box-shadow] hover:shadow-none duration-300 rounded py-1 px-2 ring-1 ring-slate-500/20 shadow text-slate-600"
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
