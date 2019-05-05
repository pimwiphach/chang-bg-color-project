const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["#FB794D", "#4464DF", "#FAF6F4", "#F2D5BF", "#444C5E"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  /* bodyBcg.style.backgroundColor = colors[2]; */
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
