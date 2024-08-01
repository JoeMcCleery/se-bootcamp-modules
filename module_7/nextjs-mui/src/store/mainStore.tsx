"use client";

import {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
} from "react";

interface IStore {}

interface IStoreAction {
  type: string;
}

const initialState: IStore = {};

const MainContext = createContext(initialState);

const userReducer = (state: IStore, action: IStoreAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const MainProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <MainContext.Provider value={{ ...state }}>{children}</MainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(MainContext);
};
