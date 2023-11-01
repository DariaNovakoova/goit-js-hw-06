// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEvent = document.querySelector("#validation-input");

inputEvent.addEventListener("blur", (elem) => {
  if (
    elem.currentTarget.value.length ===
    Number(inputEvent.getAttribute("data-length"))
  ) {
    inputEvent.classList.remove("invalid");
    inputEvent.classList.add("valid");
  } else {
    inputEvent.classList.remove("valid");
    inputEvent.classList.add("invalid");
  }
});
