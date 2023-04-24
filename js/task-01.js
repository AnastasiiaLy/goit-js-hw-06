const categoriesItem = document.querySelectorAll("#categories li.item");

console.log(`В списку ${categoriesItem.length} категорії.`);

categoriesItem.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;

  const categoryItems = item.lastElementChild;
  const categoryItemsCount = categoryItems.children.length;

  console.log(
    `- Категорія: ${categoryTitle} (кількість елементів: ${categoryItemsCount})`
  );
});
