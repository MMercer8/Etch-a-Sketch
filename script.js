//initial grid size = 64x64
let boardSize = 15;
let cellDimensions = 0;
const board = document.getElementById('board');
console.log(board);
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


/* 
old code here

this is a mothafuckin test






*/