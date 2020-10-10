const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  return liEl;
});

ul.append(...elements);
