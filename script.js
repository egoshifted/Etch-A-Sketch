const defaultSize = 4;

let currentSize = defaultSize


const slider = document.getElementById("myRange");
const sliderInt = parseInt(slider.value);
const inputText = document.getElementById("inputText");
const grid = document.getElementById("grid");
const body = document.body;
const clearBtn = document.getElementById("clearBtn")

clearBtn.onclick = () => clearGrid()

// Clears grid of all cells
let clearGrid = () => {
    grid.innerHTML = ''
    }

// Insert current range slider value in the the inputText div
let currentValueText = () => {
    inputText.textContent = `Grid size is ${slider.value} x ${slider.value}`;
    slider.addEventListener("input", gridSetting(slider.value));
}

// Track the current value in the range slider and output the value as text
slider.addEventListener("input", currentValueText);


function gridSetting(size) {
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        grid.appendChild(gridElement);
    }
       
}

// Sets grid size to default on window load
window.onload = () => {
    gridSetting(defaultSize);
}

