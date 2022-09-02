# Etch-a-Sketch

//initial grid size = 64 x 64
const DEFAULT_COLOR = '#333333'; 
const DEFAULT_SIZE = 16;


const grid = document.getElementById('grid');
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let cellDimensions = 0;
const board = document.getElementById('board');
console.log(grid);

function sizeChange(value) {
    console.log("size changed to " + value);

}

function setupGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize})`
    grid.style.gridTemplateRows = `repeat(${gridSize})`
    console.log(grid.style.gridTemplateRows + " " + grid.style.gridTemplateColumns);
    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement('div');
       // gridElement
       gridElement.classList.add('cell');
       grid.appendChild(gridElement);


    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    console.log("loaded");
}

/*
const XXXX = document.getElementById('element');

*/


/* 
old code here



function makeGrid(gridSize) {
    //loop
    for(let i = 1; i <= gridSize; i++) {
        //create row
        const row = document.createElement('div');
        board.appendChild(row);
        row.border = '2px solid orange';
        for (let j = 1; j <= gridSize; j++) {
        console.log("j: " + j);
        const div = document.createElement('div');
        div.classList.add('cell');
        let divStyle = div.style;    
        divStyle.width = '10px';
        divStyle.height = '10px'; 
        

        divStyle.border = '1px solid black';
        divStyle.backgroundColor = 'red';
        row.appendChild(div);
        }
    }
}

board.style.gridTemplateColumns = `repeat(${boardSize},1fr)`
console.log(board.style.gridTemplateColumns);
board.style.gridTemplateRows = `repeat(${boardSize},1fr)`

makeGrid(boardSize);

const isHover = e => e.board.querySelector(':hover') === e;
const allCells = document.querySelectorAll('.cell');
//allCells.classList.add('allCells');

const btn = document.querySelector('.colorit');
console.log('btn ' + btn);
console.log(allCells);



function colorSquare() {
    //change color of square when mouse click/drags over div
    for (let cell of allCells) {
        //console.log(cell);
        cell.classList.add('black');
    }
}

function eraseSquare() {
    //change color of div back to normal

}

function clear() {
    //clear the board of colors
}

function resizeGrid() {
    //reset the div
    //if (num <= 100) {
        //resize grid
   // }
}
function scaledivs() {
    
}




*/












html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="styles.css">
    <title>Etch-A-Sketch</title>
</head>
<body>
    <h1 class="title">Etch-A-Sketch</h1>
  
       
        <div id="grid"></div>
        <button id="colorit">click</button>
        <input type="range" name="Size" min="10" max ="50" id="boardSize" onchange="sizeChange(this.value)">
</body>
</html>




css
* {


}

.title {
    display: block;
    text-align: center;
}
body {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: lightslategrey;
}

#grid {
    border: solid 1px black;
    background-color: blanchedalmond;
    display: grid;
    width: 500px;
    height: 500px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.cell {
   background-color: white;
   border: 1px solid black;
}

.black {
    
}