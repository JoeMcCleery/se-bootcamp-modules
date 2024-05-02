function appendChildren(element, children) {
  if (Array.isArray(children)) {
    children.forEach((child) => appendChildren(element, child));
  } else {
    element.append(children);
  }
}

export default appendChildren;
