import { ComponentProps } from "react";
import Icon from "../icons/Icon";

export default function LoadingText({ className }: ComponentProps<"div">) {
  return (
    <div className={`${className} flex items-center`}>
      <Icon
        icon="progress_activity"
        className="animate-spin mr-2"
      />
      <p className="animate-pulse">Loading...</p>
    </div>
  );
}
