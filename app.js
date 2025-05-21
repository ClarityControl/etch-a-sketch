let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


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
}

createGrid(16);

function changeColor(square){
    square.style.backgroundColor = 'black';
}
