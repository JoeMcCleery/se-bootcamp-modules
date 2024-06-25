import { useState } from "react";
import "./App.css";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";
import Greeting from "./components/Greeting";

const labContent = [
  { name: "Lab 1", content: <Greeting name={"Joe"}>McCleery</Greeting> },
  { name: "Lab 2/4", content: <BigCats /> },
  { name: "Lab 3", content: <Emoji /> },
];

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1em",
          marginBottom: "2em",
          justifyContent: "center",
        }}
      >
        {labContent.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setIndex(i)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div>{labContent[index].content}</div>
    </>
  );
};

export default App;
