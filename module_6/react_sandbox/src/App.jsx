import "./App.css";
import BigCats from "./components/BigCats";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <div className="our-first-container">
        <Greeting name={"Joe"}>McCleery</Greeting>
        <BigCats />
      </div>
    </>
  );
};

export default App;
