import "./App.css";
import Clock from "./components/Clock";
import { UserProvider } from "./components/UserProvider";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="p-4 grid gap-4 max-w-3xl m-auto justify-center">
      <Clock />
      <Navbar />

      <UserProvider>
        <Container>
          <Outlet />
        </Container>
      </UserProvider>
    </div>
  );
}

export default App;
