const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.getElementById("color");
const card = document.getElementById('card');

card.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  card.style.backgroundColor = hexColor;
  console.log(hexColor);
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
