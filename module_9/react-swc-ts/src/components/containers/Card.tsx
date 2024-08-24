import { PropsWithChildren } from "react";

interface ICardProps extends PropsWithChildren {
  title?: string;
}

export default function Card({ title, children }: ICardProps) {
  return (
    <div className="bg-slate-300 rounded shadow border border-slate-400 divide-y divide-slate-400">
      {title && (
        <div className="p-4">
          <p className="text-slate-600">{title}</p>
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
}
