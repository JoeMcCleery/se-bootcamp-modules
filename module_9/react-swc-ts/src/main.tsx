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
import ProfilePage from "./components/pages/ProfilePage";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <DefaultLayout />
      </UserProvider>
    ),
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
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
