import { Link, Outlet } from "react-router-dom";
import { useUserContext } from "../providers/UserProvider";
import NavLink from "../inputs/NavLink";

export default function DefaultLayout() {
  const [user] = useUserContext();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="p-4 grid gap-4 bg-sky-500 text-center">
        <h1 className="text-3xl text-white">Blog App</h1>

        <nav className="flex gap-2 justify-center">
          <NavLink
            to="/posts"
            label="Posts"
          />

          {user ? (
            <NavLink
              to="/profile"
              label="Profile"
            />
          ) : (
            <>
              <NavLink
                to="/login"
                label="Login"
              />
              <NavLink
                to="/signup"
                label="Sign Up"
              />
            </>
          )}
        </nav>
      </header>

      <main className="p-4">
        <Outlet />
      </main>

      <footer className="p-4 bg-sky-500 text-center">
        <p className="text-white">By Joe McCleery</p>
      </footer>
    </div>
  );
}
