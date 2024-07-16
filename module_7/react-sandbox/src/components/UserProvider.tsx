import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IUser {
  name: string;
}

interface IUserContext {
  currentUser: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser>>;
}

const UserContext = createContext<IUserContext>({
  currentUser: { name: "" },
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<IUser>({ name: "Jeff" });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
