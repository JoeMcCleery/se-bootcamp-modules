import { ComponentProps } from "react";
import SpinnerIcon from "../icons/SpinnerIcon";

export default function LoadingText({ className }: ComponentProps<"div">) {
  return (
    <div className={`${className} flex items-center`}>
      <SpinnerIcon />
      <p className="animate-pulse">Loading...</p>
    </div>
  );
}
