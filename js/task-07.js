const inputEl = document.querySelector("#font-size-control");

const valueEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(event) {
  valueEl.style.fontSize = event.currentTarget.value + "px";
}
