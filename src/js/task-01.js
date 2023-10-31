// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>,
// вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// (Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5)

const listNum = document.querySelectorAll(".item");

console.log(`Number of categories: ${listNum.length}`);

listNum.forEach((elem) => {
  console.log("");
  const itemName = elem.querySelector("h2");
  console.dir(`Category: ${itemName.textContent}`);
  const countEl = elem.querySelectorAll("li");
  console.dir(`Element: ${countEl.length}`);
});
