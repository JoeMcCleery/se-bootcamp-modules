import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="p-4 bg-sky-500 text-center">
        <h1 className="text-3xl text-white">Blog App</h1>
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
