import { PropsWithChildren, useMemo } from "react";

interface IPageProps extends PropsWithChildren {
  centered?: boolean;
  className?: string;
}

export default function Page({ centered, className, children }: IPageProps) {
  const containerClass = useMemo(() => {
    if (centered) {
      return "h-full items-center justify-center";
    }
    return "";
  }, [centered]);

  return (
    <div className={`${containerClass} ${className} grid gap-4`}>
      {children}
    </div>
  );
}
