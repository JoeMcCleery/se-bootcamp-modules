import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../../types";
import { useNavigate } from "react-router-dom";

interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logOut: () => void;
}

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
  logOut: () => {},
});

export default function UserProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUserState] = useState<IUser | null>(null);

  useEffect(() => {
    const cachedUser = window.localStorage.getItem("user");
    if (!cachedUser) return;
    setUser(JSON.parse(cachedUser));
  }, []);

  function setUser(user: IUser | null) {
    setUserState(user);
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  function logOut() {
    setUser(null);
    navigate("/login");
  }

  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const { user, setUser, logOut } = useContext(UserContext);
  return { user, setUser, logOut } as const;
}
