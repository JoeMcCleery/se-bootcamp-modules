import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import PostsPage from "./components/pages/PostsPage";
import UserProvider from "./components/providers/UserProvider";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignupPage";
import ErrorPage from "./components/pages/ErrorPage";
import UserPage from "./components/pages/UserPage";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);