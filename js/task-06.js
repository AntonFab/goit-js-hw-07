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

  currentValueLength !== minReqLength
    ? input.classList.add("invalid") ||
      input.classList.replace("valid", "invalid")
    : input.classList.add("valid") ||
      input.classList.replace("invalid", "valid");
}
