import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

interface INavLinkProps {
  to: string;
  label: string;
}

export default function NavLink({ to, label }: INavLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      label={label}
      onClick={() => navigate(to)}
      disabled={location.pathname === to}
    />
  );
}
