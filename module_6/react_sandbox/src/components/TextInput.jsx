export default function TextInput({ label, id, name, value, onChange }) {
  return (
    <div style={{ display: "grid", textAlign: "left" }}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
