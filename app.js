const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorText = document.getElementById('color');
const card = document.getElementById('card');

card.addEventListener('click', function() {
    // this.classList.toggle('flipped');
    const randomNum = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[randomNum];
    colorText.textContent = selectedColor;
    card.style.backgroundColor = selectedColor;
    console.log(selectedColor);
});