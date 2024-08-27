import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function DefaultLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen text-white font-roboto">
      <header className="z-20 p-4 grid gap-4 bg-sky-500 text-center shadow border-b border-sky-900/70 sticky top-0">
        <h1 className="text-3xl text-white">Blog App</h1>

        <Navigation />
      </header>

      <main className="bg-sky-700">
        <Outlet />
      </main>

      <footer className="p-2 bg-sky-900 text-center text-white/80">
        <p>By Joe McCleery</p>
      </footer>
    </div>
  );
}
