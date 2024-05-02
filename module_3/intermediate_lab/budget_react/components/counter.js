import useState from "../hooks/useState.js";
import Button from "./button.js";

function Counter() {
  const [count, setCount] = useState(0);

  return Button({
    children: `Click me! ${count}`,
    onClick: () => setCount(count + 1),
  });
}

export default Counter;
