"use client"; // client component, not server rendered
import { useRouter } from "next/navigation";

const Dash = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/about");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleNavigate}>about page</button>
    </div>
  );
};

export default Dash;
