import { ComponentProps } from "react";
import Close from "../../assets/close.svg?react";

export default function CloseIcon({ className }: ComponentProps<"svg">) {
  return <Close className={`${className} h-5 w-5 fill-white`} />;
}
