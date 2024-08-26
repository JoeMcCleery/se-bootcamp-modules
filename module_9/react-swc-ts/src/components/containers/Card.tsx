import { PropsWithChildren } from "react";

interface ICardProps extends PropsWithChildren {
  className?: string;
}

export default function Card({ className, children }: ICardProps) {
  return (
    <div
      className={`${className} overflow-hidden grid bg-sky-500 rounded border shadow border-sky-900/70 divide-y divide-sky-900/20 break-normal`}
    >
      {children}
    </div>
  );
}
