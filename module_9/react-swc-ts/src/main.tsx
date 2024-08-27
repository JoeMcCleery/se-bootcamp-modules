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
import PostPage from "./components/pages/PostPage";
import PublicProfilePage from "./components/pages/PublicProfilePage";

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
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },

      // Login/Signup
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },

      // Post routes
      {
        path: "posts",
        element: <PostsPage />,
      },
      {
        path: "posts/:id",
        element: <PostPage />,
      },

      // Profile routes
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "profile/:id",
        element: <PublicProfilePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
