import Element from "./generic/element.js";

function Button({ children = [], onClick = () => {} }) {
  const button = Element({ tag: "button", children: children });
  button.addEventListener("click", (e) => onClick(e));
  return button;
}

export default Button;
