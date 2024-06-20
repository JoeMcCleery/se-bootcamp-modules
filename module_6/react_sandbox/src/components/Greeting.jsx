export default function Greeting({ name, children }) {
  return (
    <h1>
      HELLO {name || "WORLD"} {children}
    </h1>
  );
}
