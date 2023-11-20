//Model - application logic

    


//View - manipulate DOM
function createGrid (gridSizeInput, minContainerDim) {    
    let sketchContainer = document.getElementById("sketch-container");
    const cellWidth = minContainerDim / gridSizeInput;
    const cellWidthProperty = `${cellWidth}px`;
    
    document.documentElement.style.setProperty('--grid-cell-width', cellWidthProperty);
    document.documentElement.style.setProperty('--grid-cell-height', cellWidthProperty);

    for (let i = 0; i < gridSizeInput ** 2; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add('grid-cell');
        sketchContainer.appendChild(gridCell);
    }
}

function retrieveSketchContainerDimensions () {
    let sketchContainer = document.getElementById("sketch-container");
    const sketchContainerWidth = sketchContainer.clientWidth;
    const sketchContainerHeight = sketchContainer.clientHeight;
    return Math.min(sketchContainerWidth, sketchContainerHeight);
}

//Controller - listens to events
const gridButton = document.getElementById('create-grid');

gridButton.addEventListener('click', () => {
    const gridSizeInput = +document.getElementById('input-grids').value;
    createGrid(gridSizeInput, retrieveSketchContainerDimensions());
})