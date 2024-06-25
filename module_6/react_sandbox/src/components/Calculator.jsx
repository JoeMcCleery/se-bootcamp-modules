import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  function appendNumber(number) {
    let n;
    if (operator) {
      n = num2 + number;
      setNum2(n);
    } else {
      n = num1 + number;
      setNum1(n);
    }
    setDisplay(n);
  }

  function clear() {
    setDisplay("0");
    setOperator("");
    setNum1("");
    setNum2("");
  }

  function calculate(e) {
    e.preventDefault();

    const n1 = parseInt(num1) || 0;
    const n2 = parseInt(num2) || 0;
    let result;
    switch (operator) {
      case "*":
        result = n1 * n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "+":
        result = n1 + n2;
        break;
      case "/":
        result = n1 / n2;
        break;
    }
    const n = result.toString();
    setDisplay(n);
    setOperator("");
    setNum1(n);
    setNum2("");
  }

  return (
    <div>
      <p style={{ textAlign: "left" }}>{display}</p>
      <p style={{ textAlign: "left", fontSize: "0.75em" }}>
        {num1 || "0"}
        {operator}
        {num2}
      </p>
      <form
        onSubmit={calculate}
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        <button
          type="button"
          onClick={() => appendNumber("7")}
        >
          7
        </button>
        <button
          type="button"
          onClick={() => appendNumber("8")}
        >
          8
        </button>
        <button
          type="button"
          onClick={() => appendNumber("9")}
        >
          9
        </button>
        <button
          type="button"
          onClick={() => setOperator("*")}
        >
          *
        </button>

        <button
          type="button"
          onClick={() => appendNumber("4")}
        >
          4
        </button>
        <button
          type="button"
          onClick={() => appendNumber("5")}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => appendNumber("6")}
        >
          6
        </button>
        <button
          type="button"
          onClick={() => setOperator("-")}
        >
          -
        </button>

        <button
          type="button"
          onClick={() => appendNumber("1")}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => appendNumber("2")}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => appendNumber("3")}
        >
          3
        </button>
        <button
          type="button"
          onClick={() => setOperator("+")}
        >
          +
        </button>

        <button
          type="button"
          onClick={() => clear()}
        >
          clr
        </button>
        <button
          type="button"
          onClick={() => appendNumber("0")}
        >
          0
        </button>
        <button type="submit">=</button>
        <button
          type="button"
          onClick={() => setOperator("/")}
        >
          /
        </button>
      </form>
    </div>
  );
}
