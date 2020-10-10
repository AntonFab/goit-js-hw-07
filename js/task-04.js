const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");
let currentValue = Number(value.textContent);

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  currentValue -= 1;
  value.textContent = currentValue;
}
function onIncrementBtnClick() {
  currentValue += 1;
  value.textContent = currentValue;
}
