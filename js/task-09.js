function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const spanNameColor = document.querySelector(".color");
const buttonChange = document.querySelector(".change-color");

buttonChange.addEventListener("click", handleClick);

function handleClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanNameColor.textContent = randomColor;
}
