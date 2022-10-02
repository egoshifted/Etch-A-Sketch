const body = document.body
const container = document.querySelector(".container")
const div = document.querySelector("div")
const button = document.button
const wrapper = document.querySelector(".wrapper")

let inputCells = 0; // keeps track of the user input
let numOfCells = 0; // keeps track of how many cells there are

// Gets user input from button, pupulates the grid
promptMe = () => {
    let userInput = prompt("Enter the number of cells");
    let userInputInt = parseInt(userInput);
    inputCells = userInputInt;
    populate();
    addColumns();
}

// Function for populating the first row of the grid
const populate = () => {
    input = (typeof inputCells !== 'undefined' || 0) ?  inputCells : 16;
    for(let i = input; i > 0; i--) {
    const div = document.createElement("div");
    container.append(div);
    div.classList.add('cell')
    numOfCells += 1;
    }
}


// Function for multiplying the columns by the number of cells in the first grid
const addColumns = () => {
    for(i = numOfCells; i > 0 + 1; i--) {
    const clonedRows = document.querySelector(".container")
    const clone = clonedRows.cloneNode(true);
    wrapper.append(clone);
    }
}


