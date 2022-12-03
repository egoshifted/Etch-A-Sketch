const defaultSize = 4;
const slider = document.getElementById("myRange")
const sliderInt = parseInt(slider.value)
const inputText = document.getElementById("inputText")
const grid = document.getElementById("grid")
const body = document.body;
const clearBtn = document.getElementById("clearBtn")
const picker = document.getElementById("picker")
let currentColour = "black"
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

clearBtn.onclick = () => defaultGrid()

// Clears grid of all cells
let clearGrid = () => {
    grid.innerHTML = ''
    }

// Insert current range slider value in the the inputText div and sets the grid to the current selected size
let currentValueText = () => {
    inputText.textContent = `Grid size is ${slider.value} x ${slider.value}`;
    slider.addEventListener("input", gridSetting(slider.value));
}

// Track the current value in the range slider and output the value as text
slider.addEventListener("input", currentValueText);


// Set up a new grid, add event listers to each cell
function gridSetting(size) {
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', applyColour)
        gridElement.addEventListener('mousedown', applyColour)
        grid.appendChild(gridElement);
    }
       
}

// Applies colour to the target cell
function applyColour(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = picker.value
}

// Sets grid size to default on window load
window.onload = () => {
    gridSetting(defaultSize);
}

// Sets default grid size to 4
function defaultGrid() {
    gridSetting(defaultSize);
    slider.value = defaultSize;
    inputText.textContent = `Grid size is ${slider.value} x ${slider.value}`;

}