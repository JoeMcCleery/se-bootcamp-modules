import { useEffect, useRef } from "react";

export default function SillyReact({ name }: { name: string }) {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!div.current) return;
      div.current.textContent = "Overwritten!";
      div.current.classList.add("text-blue-400");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return <div ref={div}>{name}</div>;
}
