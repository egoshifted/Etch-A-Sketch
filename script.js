const slider = document.getElementById("myRange");
const inputText = document.getElementById("inputText");

let currentValue = () => {
    inputText.textContent = `Input is ${slider.value}`;
    }

slider.addEventListener("input", currentValue);

