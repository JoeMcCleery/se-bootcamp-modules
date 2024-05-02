import appendChildren from "../../framework/appendChildren.js";

function Element({ tag = "div", style = "", classList = "", children = [] }) {
  const element = document.createElement(tag);
  element.style = style;
  element.classList = classList;
  appendChildren(element, children);

  return element;
}

export default Element;
