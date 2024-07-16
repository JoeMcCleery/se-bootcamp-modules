import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IUserContext {
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<IUserContext>({
  currentUser: "",
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState("Default User");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
