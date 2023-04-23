const ulElements = document.querySelectorAll("#categories li.item");
console.log("Number of categories:", ulElements.length);

ulElements.forEach(function (el) {
  const elements = el.querySelectorAll("li");
  const category = el.querySelector("li>h2");

  const obj = {
    Categoty: category.textContent,
    Elements: elements.length,
  };
  console.log(obj);
});
