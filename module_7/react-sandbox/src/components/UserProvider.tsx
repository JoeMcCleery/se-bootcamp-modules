import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface IUser {
  name: string;
}

type Emoji = "😀" | "😄" | "😅";

interface IUserContextState {
  user: IUser;
  mode: "light" | "dark";
  emoji: Emoji;
}

interface IUserContext {
  state: IUserContextState;
  updateUser: (user: IUser) => void;
  toggleMode: () => void;
  updateEmoji: (emoji: string) => void;
}

const defaultState: IUserContextState = {
  user: { name: "Jeff" },
  mode: "light",
  emoji: "😀",
};

const defaultContext: IUserContext = {
  state: defaultState,
  updateUser: () => {},
  toggleMode: () => {},
  updateEmoji: () => {},
};

const UserContext = createContext<IUserContext>(defaultContext);

interface IUserAction {
  type: "UPDATE_USER" | "TOGGLE_MODE" | "UPDATE_EMOJI";
  payload?: IUser | string;
}

const userReducer = (
  state: IUserContextState,
  action: IUserAction
): IUserContextState => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload as IUser };
    case "TOGGLE_MODE":
      return { ...state, mode: state.mode == "light" ? "dark" : "light" };
    case "UPDATE_EMOJI":
      return { ...state, emoji: action.payload as Emoji };
  }
};

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, defaultState);

  function updateUser(user: IUser) {
    dispatch({ type: "UPDATE_USER", payload: user });
  }

  function updateEmoji(emoji: string) {
    dispatch({ type: "UPDATE_EMOJI", payload: emoji });
  }

  function toggleMode() {
    dispatch({ type: "TOGGLE_MODE" });
  }

  return (
    <UserContext.Provider
      value={{ state, updateUser, toggleMode, updateEmoji }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
