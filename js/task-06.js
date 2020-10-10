// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество, то border
// инпута становится зеленым, если неправильное - красным.

const input = document.querySelector("#validation-input");

const minReqLength = Number(input.dataset.length);

input.addEventListener("change", onInputChange);

function onInputChange(event) {
  currentValueLength = event.currentTarget.value.length;

  if (
    currentValueLength === minReqLength &&
    input.classList.contains("invalid")
  ) {
    input.classList.replace("invalid", "valid");
  } else if (currentValueLength === minReqLength) {
    input.classList.add("valid");
  } else if (input.classList.contains("valid")) {
    input.classList.replace("valid", "invalid");
  } else input.classList.add("invalid");
}
