const body = document.body
const container = document.querySelector(".container")
const div = document.querySelector("div")
let numOfCells = 0; // keeps track of how many cells there are

// Populates the sketch book with a row of user defined length or 16 by default
const populate = (input) => {
    input = (typeof input !== 'undefined') ?  input : 16;
    for(let i = input; i > 0; i--) {
        const div = document.createElement("div");
        container.append(div);
        div.classList.add('cell')
        numOfCells += 1;
        }
}


// Creates new columns as a multiple of cells in the first grid
const addColumns = () => {
    for(i = numOfCells; i > 0 + 1; i--) {
    const clonedRows = document.querySelector(".container")
    const clone = clonedRows.cloneNode(true);
    body.append(clone);
    }
}