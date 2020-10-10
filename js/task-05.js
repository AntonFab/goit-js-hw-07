const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputValue);

function onInputValue(event) {
  if (input.value.length === 0) {
    return (span.textContent = "незнакомец");
  }
  span.textContent = event.currentTarget.value;
}
