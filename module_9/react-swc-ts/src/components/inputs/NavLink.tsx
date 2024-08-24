import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

interface INavLinkProps {
  to: string;
  label: string;
}

export default function NavLink({ to, label }: INavLinkProps) {
  const navigate = useNavigate();
  return (
    <Button
      label={label}
      onClick={() => navigate(to)}
    />
  );
}
