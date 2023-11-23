//Model - application logic

    


//View - manipulate DOM
function createGrid (gridSizeInput, containerDimensions) {    
    const cellWidth = containerDimensions[0] / gridSizeInput;
    const noRows = Math.floor(containerDimensions[1] / cellWidth);
    const cellWidthProperty = `${cellWidth}px`;
    
    document.documentElement.style.setProperty('--grid-cell-width', cellWidthProperty);
    document.documentElement.style.setProperty('--grid-cell-height', cellWidthProperty);

    for (let i = 0; i < gridSizeInput * noRows; i++) {
        let gridCell = document.createElement("div");
        // Unique for all grid cells
        gridCell.id = `grid-cell-${i+1}`;
        // Class type for all grid cells
        gridCell.classList.add(`grid-cell`);
        // Add an event listener to each grid cell
        gridCell.addEventListener('click', handleClick);
        sketchContainer.appendChild(gridCell);
    }
}

function retrieveSketchContainerDimensions () {
    const style = window.getComputedStyle(sketchContainer);
    
    const totalWidth = parseFloat(style.width);
    const totalHeight = parseFloat(style.height);    
    const borderTop = parseFloat(style.borderTopWidth);
    const borderBottom = parseFloat(style.borderBottomWidth);
    const borderLeft = parseFloat(style.borderLeftWidth);
    const borderRight = parseFloat(style.borderRightWidth);
    
    const sketchContainerWidth = totalWidth - borderLeft - borderRight;
    const sketchContainerHeight = totalHeight - borderTop - borderBottom;
    return [sketchContainerWidth, sketchContainerHeight];
}

//Controller - listens to events
const gridButton = document.getElementById('create-grid');
const sketchContainer = document.getElementById("sketch-container");
const colourPallette = document.querySelector(".colour-pallete");
let colourChoice = "red";

//Generate grid button
gridButton.addEventListener('click', () => {    
    sketchContainer.innerHTML = "";
    const gridSizeInput = +document.getElementById('input-grids').value;
    createGrid(gridSizeInput, retrieveSketchContainerDimensions());
})
   
function handleClick(event) {
    event.target.style.backgroundColor = colourChoice;
}

//obtain colour
colourPallette.addEventListener('click', (event) => {
    if (event.target.matches('#red')) {
        colourChoice = "red";
    }
    if (event.target.matches('#orange')) {
        colourChoice = "orange";
    }
    if (event.target.matches('#blue')) {
        colourChoice = "blue";
    }
})
