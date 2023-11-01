// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decAct = document.querySelector('[data-action="decrement"]');
const incAct = document.querySelector('[data-action="increment"]');
const countVal = document.querySelector("#value");

let counterValue = 0;

decAct.addEventListener("click", () => {
  counterValue -= 1;
  countVal.textContent = counterValue;
});

incAct.addEventListener("click", () => {
  counterValue += 1;
  countVal.textContent = counterValue;
});
