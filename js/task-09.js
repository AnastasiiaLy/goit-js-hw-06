const bntEl = document.querySelector(".js-click-btn");

const span = document.querySelector("span");

bntEl.addEventListener("click", onBtnClick);

function onBtnClick(event) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const body = document.querySelector("body");
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
  // console.log(`span.color: ${randomColor}`);
}
