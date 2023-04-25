const inputEl = document.querySelector("#font-size-control");
const valueEl = document.querySelector("#text");

valueEl.style.fontSize = inputEl.value + "px";

inputEl.addEventListener("input", onInput);

function onInput(event) {
  valueEl.style.fontSize = event.currentTarget.value + "px";
  console.log(event.target.value);
}
