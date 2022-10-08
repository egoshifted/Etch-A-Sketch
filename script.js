const slider = document.getElementById("myRange");
const inputText = document.getElementById("inputText");
const wrapper = document.getElementById("wrapper");
const body = document.body;


// Insert current range slider value in the the inputText div
let currentValueText = () => {
    inputText.textContent = `Number of cells is ${slider.value}`;
}

let cellContent = () => {
    for(i = 0; i < Number(slider.value), i++;) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("grid-element");
        body.appendChild(cellElement);
        
    }
}

// Track the current value in the range slider and output the value as text
slider.addEventListener("input", currentValueText);
slider.addEventListener("input", cellContent);

