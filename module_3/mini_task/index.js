function BaseObject(title, description) {
  this.title = title;
  this.description = description;
}

// Create content
const content = [
  new BaseObject(
    "Act 1",
    "<p><b>Obi-Wan:</b><br/>It's over Anakin, I have the high ground.</p><p><b>Anakin Skywalker:</b><br/>You underestimate my power!</p>"
  ),
  new BaseObject("Act 2", "🔥💀😂"),
  new BaseObject("Fin", "♿"),
];

let currentIndex = 0;
function setActiveContent(index) {
  // Dont overflow array
  currentIndex = (index + content.length) % content.length;

  // Get active content object
  const activeContent = content[currentIndex];

  // Get container elements
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  // Set container content
  title.innerHTML = activeContent.title;
  description.innerHTML = activeContent.description;
}

// Set default active content
setActiveContent(currentIndex);

// Setup nav events
document.getElementById("nav-prev").addEventListener("click", () => {
  setActiveContent(currentIndex - 1);
});
document.getElementById("nav-next").addEventListener("click", () => {
  setActiveContent(currentIndex + 1);
});
