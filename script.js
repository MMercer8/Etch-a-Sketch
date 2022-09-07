//initial grid size = 64 x 64
const DEFAULT_COLOR = '#333333'; 
const DEFAULT_SIZE = 30;
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;


const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPickerID');
colorPicker.addEventListener('change', changeDrawColor);
console.log(currentColor);
const bluebtn = document.getElementById('bluebtn');
let cellDimensions = 0;
const board = document.getElementById('board');
let mouseDown = false;
const sizeValue = document.getElementById('sizeValue');
sizeValue.textContent = (`Size: ${currentSize}`);
const boardSizeSlider = document.getElementById('boardSize');
//boardSizeSlider.addEventListener('change', sizeChange);
boardSizeSlider.onchange = function(event) {
    currentSize = event.target.value;
    setupGrid(currentSize);
    sizeValue.textContent = (`Size: ${currentSize}`);
    //console.log("event change works" + event.target.value);
}

let gridCells = [];
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const colorItButton = document.getElementById('colorit');
colorItButton.addEventListener('click', clearBoard);
function sizeChange(e) {
  //  console.log("size changed to " + e);
    //currentSize = e;

    //console.log("currentSize: " + currentSize);
    //setupGrid(currentSize, rgba(255,255,255,1));

    
}

   //console.log("size is: " + boardSizeSlider.value);



function setupGrid(gridSize) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    console.log(grid.style.gridTemplateRows + " " + grid.style.gridTemplateColumns);
    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridElement = document.createElement('div');
       //gridElement.addEventListener('mousedown', isOver);
       gridElement.addEventListener('mouseover', isOver);
       gridElement.addEventListener('mousedown', isOver);
       gridElement.classList.add('cell');
       gridCells[i] = gridElement;
       gridElement.style = `background-color: rgba(255, 255, 255, 1)`
       //gridElement.style = `bgColor`
       //cell[i].style = 'background-color: rgba(255, 255, 255, 1)'; //redundant, but deals with override of css styling
       //gridElement.addEventListener('mouseenter', test);
       grid.appendChild(gridElement);


    }
}



    function isOver (e) {
        //event.relatedTarget.style = 'background-color: rgba(25, 255, 255, 1)';
        
        if (e.type === 'mouseover' && !mouseDown) return
        //if (e.type === 'mouseover' && e.type ==='mousedown'){
        this.style = `background-color: ${currentColor}`;
        //}
        //alert('it worked');
        //e.stopPropogation();
    }

   

window.onload = () => {
   setupGrid(DEFAULT_SIZE);
    console.log("loaded");
}

function clearBoard() {
  grid.innerHTML = '';
  setupGrid(DEFAULT_SIZE);
 
}

function changeDrawColor() {
    console.log("current color before: " + currentColor);
    currentColor = colorPicker.value;
    console.log("current color after: " + currentColor);
}



function changeGridColor(color) {
    console.log(gridCells);
    gridCells.forEach(element => {
        
        element.style = `background-color: ${color})`;
    });
}
/*
const XXXX = document.getElementById('element');

*/


/* 
old code here

  console.log(gridCells);
    gridCells.forEach(element => {
        
        element.style = `background-color: rgba(255,255,255,1)`;
    });

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

