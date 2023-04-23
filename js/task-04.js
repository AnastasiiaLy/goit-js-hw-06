const increaseValueBtn = document.querySelector("[data-action=increment]");
const decreaseValueBtn = document.querySelector("[data-action=decrement]");
const item = document.querySelector("#value");

let counterValue = 0;

increaseValueBtn.addEventListener("click", () => {
  counterValue += 1;
  item.textContent = counterValue;
});

decreaseValueBtn.addEventListener("click", () => {
  counterValue -= 1;
  item.textContent = counterValue;
});
