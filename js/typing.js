const phrases = ["Bem-vindo(a)!", "Futuro Dev Full Stack", "Designer e Atleta Híbrido"];
let index = 0;
const heroText = document.getElementById("hero-text");

function changeText() {
    heroText.classList.remove("typing");
    heroText.offsetHeight; 
    heroText.classList.add("typing");
    heroText.textContent = phrases[index];
    index = (index + 1) % phrases.length;
}

setInterval(changeText, 3000); 
