import { useEffect, useRef } from "react";

export default function SillyReact({ name }: { name: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!divRef.current) return;
      divRef.current.textContent = "Overwritten!";
      divRef.current.classList.add("text-blue-400");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return <div ref={divRef}>{name}</div>;
}
