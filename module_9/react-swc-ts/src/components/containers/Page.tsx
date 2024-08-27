import { PropsWithChildren, useMemo } from "react";

interface IPageProps extends PropsWithChildren {
  centered?: boolean;
  padding?: boolean;
  className?: string;
}

export default function Page({
  centered,
  padding,
  className,
  children,
}: IPageProps) {
  let containerClass = useMemo(() => {
    if (centered) {
      return "h-full items-center justify-center";
    }
    return "";
  }, [centered]);

  containerClass += padding ? " p-4" : "";

  return (
    <div className={`${containerClass} ${className} grid gap-4`}>
      {children}
    </div>
  );
}
