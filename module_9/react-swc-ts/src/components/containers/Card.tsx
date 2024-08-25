import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="grid bg-sky-500 rounded border shadow border-sky-900/70 divide-y divide-sky-900/20 w-80">
      {children}
    </div>
  );
}
