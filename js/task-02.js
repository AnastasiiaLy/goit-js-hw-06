const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (el) {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = el;
  list.append(listEl);
  return list;
});

console.log(list);
