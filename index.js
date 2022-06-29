const form = document.querySelector("form");
const nameInput = document.querySelector(".name");
const surnameInput = document.querySelector(".surname");
const dataInput = document.querySelector(".data");
const adder = document.querySelector(".adder");
const adder1 = document.querySelector(".adder1");
const head = document.querySelector(".table");
const main = document.querySelector(".center");
const btn = document.querySelectorAll("#btn")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  head.insertAdjacentHTML(
    "afterbegin",
    `
    <figure>
      <figcaption>
        <h1>${nameInput.value}</h1>
        <h1>${surnameInput.value}</h1>
        <p>${dataInput.value}</p>
      </figcaption>
    </figure>
    `
  );
});
adder.addEventListener("click", (event) => {
  event.preventDefault();
  main.classList.add("active");
  adder1.classList.add("active");
});
btn.addEventListener("click", () =>{
    return;
})