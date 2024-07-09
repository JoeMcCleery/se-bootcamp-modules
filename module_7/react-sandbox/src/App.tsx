import { ReactNode, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import Button from "./components/Button";
import BitcoinRates from "./components/BitcoinRates";

interface ILabData {
  label: string;
  content: ReactNode;
}

const labContent: ILabData[] = [{ label: "Lab 1", content: <BitcoinRates /> }];

function App() {
  const [index, setIndex] = useState(-1);

  const content =
    index > -1 ? labContent[index].content : <em>Select a lab above</em>;

  return (
    <div className="p-4 grid gap-4 max-w-3xl m-auto">
      <Clock />
      <div className="flex flex-wrap gap-2 justify-center items-center bg-zinc-800 p-2 rounded-full">
        {labContent.map((data, i) => (
          <Button
            key={i}
            label={data.label}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="justify-self-center">{content}</div>
    </div>
  );
}

export default App;
