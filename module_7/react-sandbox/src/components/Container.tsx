import { ReactNode, useState } from "react";

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  const [index, setIndex] = useState(0);

  if (!children) return null;

  const numChildren = Array.isArray(children) ? children.length : 1;
  const child = Array.isArray(children)
    ? children[index % numChildren]
    : children;

  return (
    <div style={{ margin: "auto" }}>
      {numChildren > 1 && (
        <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <button
            onClick={() => setIndex((index + numChildren - 1) % numChildren)}
          >
            Prev
          </button>

          {index}

          <button onClick={() => setIndex((index + 1) % numChildren)}>
            Next
          </button>
        </div>
      )}

      {child}
    </div>
  );
}
