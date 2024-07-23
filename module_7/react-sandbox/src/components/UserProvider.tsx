import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface IUser {
  name: string;
}

interface IUserContextState {
  user: IUser;
  mode: "light" | "dark";
}

interface IUserContext {
  state: IUserContextState;
  updateUser: (user: IUser) => void;
  toggleMode: () => void;
}

const defaultState: IUserContextState = {
  user: { name: "Jeff" },
  mode: "light",
};

const defaultContext: IUserContext = {
  state: defaultState,
  updateUser: () => {},
  toggleMode: () => {},
};

const UserContext = createContext<IUserContext>(defaultContext);

interface IUserAction {
  type: "UPDATE_USER" | "TOGGLE_MODE";
  payload?: IUser;
}

const userReducer = (
  state: IUserContextState,
  action: IUserAction
): IUserContextState => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload! };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode == "light" ? "dark" : "light" };
  }
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, defaultState);

  function updateUser(user: IUser) {
    dispatch({ type: "UPDATE_USER", payload: user });
  }

  function toggleMode() {
    dispatch({ type: "TOGGLE_MODE" });
  }

  return (
    <UserContext.Provider value={{ state, updateUser, toggleMode }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
