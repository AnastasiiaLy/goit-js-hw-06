const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const isValidLength = checkInputLength(inputEl.value, inputEl.dataset.length);
  inputEl.classList.toggle("valid", isValidLength);
  inputEl.classList.toggle("invalid", !isValidLength);
}

function checkInputLength(value, length) {
  return value.length === Number(length) ? true : false;
}
