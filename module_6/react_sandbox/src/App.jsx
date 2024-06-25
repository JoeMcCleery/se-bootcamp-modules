import "./App.css";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <div className="our-first-container">
        <Greeting name={"Joe"}>McCleery</Greeting>
        <Emoji />
        <BigCats />
      </div>
    </>
  );
};

export default App;
