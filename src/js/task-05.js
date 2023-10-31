// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputArea = document.querySelector("#name-input");
const spanArea = document.querySelector("#name-output");

inputArea.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    spanArea.textContent = "Anonymous";
  } else {
    spanArea.textContent = event.currentTarget.value;
  }
});
