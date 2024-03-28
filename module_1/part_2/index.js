let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmit();
});

function formSubmit() {
  const data = new FormData(form);
  alert(`${data.get("name")} likes the ${data.get("favPic")} picture!`);
}
