import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="grid bg-slate-300 rounded border border-slate-400/20 divide-y divide-slate-400/20 w-80">
      {children}
    </div>
  );
}
