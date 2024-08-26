import { ComponentProps } from "react";
import Spinner from "../../assets/spinner.svg?react";

export default function SpinnerIcon({ className }: ComponentProps<"svg">) {
  return <Spinner className={`${className} h-5 w-5 mr-2 animate-spin`} />;
}
