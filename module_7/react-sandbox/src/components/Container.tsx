import { ReactNode } from "react";
import { useUserContext } from "./UserProvider";

interface IContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  const { state } = useUserContext();

  return (
    <>
      <div className="flex justify-between gap-2">
        <p>name: {state.user.name}</p>
        <p>mode: {state.mode}</p>
      </div>

      {children}
    </>
  );
}
