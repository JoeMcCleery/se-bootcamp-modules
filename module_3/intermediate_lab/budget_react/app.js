import Element from "./components/generic/element.js";
import Card from "./components/card.js";
import P from "./components/p.js";
import Counter from "./components/counter.js";

function App() {
  return Element({
    tag: "div",
    style: "display: flex; flex-direction: column; gap: 8px;",
    children: [
      Card({ title: "Budget React", children: P({ text: "Hello World" }) }),
      Card({ title: "DevX", children: P({ text: "So good lol" }) }),
      Card({
        title: "Performance",
        children: P({ text: "Blazingly fast! 😅" }),
      }),
      Card({
        title: "Interactivity",
        children: [Counter(), Counter()],
      }),
    ],
  });
}

export default App;
