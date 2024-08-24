import { PropsWithChildren } from "react";

interface ICardProps extends PropsWithChildren {
  title?: string;
}

export default function Card({ title, children }: ICardProps) {
  return (
    <div className="bg-slate-200 rounded shadow border border-slate-300 divide-y divide-slate-300">
      {title && (
        <div className="p-4">
          <p className="text-slate-600">{title}</p>
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
}
