import { Link } from "react-router-dom";
import { nav } from "../main";
import { buttonStyles } from "./Button";

export default function Navbar() {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center bg-zinc-800 p-2 rounded-full">
      {nav.map((data, i) => (
        <Link
          key={i}
          to={data.path}
          className={buttonStyles}
        >
          {data.label}
        </Link>
      ))}
    </div>
  );
}
