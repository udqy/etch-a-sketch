const grid = document.querySelector('.grid')

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

//helper function to remove all colored divs
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//slider 
const slider = document.querySelector('#myRange')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('myRange').value;
    //screenVal.textContent = val;
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
//function calls
createGrid();