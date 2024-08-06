import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BitcoinRates from "./components/BitcoinRates.tsx";
import BitcoinRatesCustom from "./components/BitcoinRatesCustom.tsx";
import ContextWork from "./components/ContextWork.tsx";
import Emoji from "./components/Emoji.tsx";
import RandomFromHat from "./components/RandomFromHat.tsx";
import SillyReact from "./components/SillyReact.tsx";

export const nav = [
  { label: "Lab 1", path: "/lab1", element: <BitcoinRates /> },
  { label: "Lab 2", path: "/lab2", element: <BitcoinRatesCustom /> },
  { label: "Misc", path: "/misc", element: <RandomFromHat /> },
  { label: "Lab 3", path: "/lab3", element: <Emoji /> },
  {
    label: "Use Ref",
    path: "/useref",
    element: <SillyReact name="Prop Name" />,
  },
  { label: "Context Work", path: "/contextwork", element: <ContextWork /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: nav,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
