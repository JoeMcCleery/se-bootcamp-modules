import { ReactNode } from "react";
import { useUserContext } from "./UserProvider";

interface IContainerProps {
  children?: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  const { state } = useUserContext();
  const lightMode = state.mode == "light";

  return (
    <div
      className={`p-4 rounded-2xl justify-self-center ${
        lightMode ? "bg-slate-500" : "bg-zinc-800"
      }`}
    >
      <div className="flex justify-between gap-2">
        <p>name: {state.user.name}</p>
        <p>{state.emoji}</p>
        <p>mode: {state.mode}</p>
      </div>

      {children}
    </div>
  );
}
