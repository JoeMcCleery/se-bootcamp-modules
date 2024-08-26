import NavLink from "../inputs/NavLink";
import { useUserContext } from "../providers/UserProvider";

export default function Navigation() {
  const { user } = useUserContext();

  return (
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
  );
}
