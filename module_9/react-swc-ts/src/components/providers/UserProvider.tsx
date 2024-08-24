import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IUser } from "../../types";

const UserContext = createContext<
  [IUser | null, Dispatch<SetStateAction<IUser | null>>]
>([null, () => {}]);

export default function UserProvider({ children }: PropsWithChildren) {
  const context = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const [user, setUser] = useContext(UserContext);
  return [user, setUser] as const;
}
