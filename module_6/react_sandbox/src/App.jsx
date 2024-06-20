import "./App.css";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <div className="our-first-container">
        <Greeting name={"Joe"}>McCleery</Greeting>
      </div>
    </>
  );
};

export default App;
