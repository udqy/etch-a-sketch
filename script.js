const grid = document.querySelector('.grid')
let val = document.getElementById('myRange').value;

//default grid
createGrid = () => {
    for (let i = 0; i < 256; i++) {
        removeAllChildNodes(parent)
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
};

//slider 
const slider = document.querySelector('#myRange')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

//generates a random color (hex)
function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor
}

//rgb colors
const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});

//black color
const black = document.querySelector('#black');
black.addEventListener('click', function(){
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

//the random colour button
const random = document.querySelector('#random')
random.addEventListener('click', function(){
    let randomCol = getRandomColor();
    let cell = grid.children;
    for (let i=0; i<val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = randomCol;
        })
    }
})

//clears the board
const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    let cell = grid.children;
    for (let i=0; i<val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
})


//remove all colored divs
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//function calls
createGrid();