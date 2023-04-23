const inputEl = document.querySelector("#name-input");

const textArea = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  textArea.textContent = event.currentTarget.value;
}
