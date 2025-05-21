let mouseDown = false;
let currentSize = 16;
let globalColor = 'black';

function setUpGlobalMouseListeners(){
    const container = document.querySelector('#container');

    container.addEventListener('mousedown', (e) => {
        e.preventDefault();
        mouseDown = true;
    });

    document.addEventListener('mouseup', () => {
        if (mouseDown) { // Only change state if it was previously true (i.e., user was drawing)
            mouseDown = false;
        }
    });
}

function createGrid(size) {
  const container = document.querySelector('#container');
  container.innerHTML = '';

  const squareSize = 640 / size;
  const borderSize = size > 32? 0.5 : 1;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.style.width = `${100 / size}%`;
    square.style.aspectRatio = '1 / 1'; // keeps squares square
    square.style.boxSizing = 'border-box' // This makes it so that the border stays within the size limits of the cell, preventing overflow
    square.style.border = `${0.5}px solid black`;
    square.classList.add('cell');
    container.appendChild(square);
  }

  currentSize = size;
  enableDrawing();
}

function enableDrawing(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', (e) => {
            e.preventDefault();
            changeColor(cell);
        })
        cell.addEventListener('mouseover', () => {if(mouseDown) changeColor(cell)});
    })
}

function changeGridSize(){
    const slider = document.querySelector("#grid-input");
    const label = document.querySelector("#grid-label");
    
    slider.addEventListener('input', () => {
        const value = slider.value;
        label.textContent = `${value}x${value}`;
    })

    slider.addEventListener('change', () => {
        const size = slider.value;
        createGrid(size);
    })
}

function changeColor(cell){
    cell.style.backgroundColor = globalColor;
}

function clearButtonPress(){
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', () => {
        createGrid(currentSize);
    })
}

function eraseMode(){
    var eraseCheck = document.querySelector("#erase");
    eraseCheck.addEventListener('change', () => {
        if(eraseCheck.checked == true){
            globalColor = 'white';
        }
        else globalColor = 'black';
    })
    
}

setUpGlobalMouseListeners();
createGrid(16);
changeGridSize();
clearButtonPress();
eraseMode();

