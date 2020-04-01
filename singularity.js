const body = document.getElementsByTagName('body')[0];
const container = document.getElementsByClassName('container-fluid')[0];
var count = 0;
let width = body.offsetWidth;
let height = body.offsetHeight, id = 0;
const deleteGrid = (e) => {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 255));
    }
    color.push(Math.random());
    e.target.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
    setInterval(() => {
        e.target.parentNode.removeChild(e.target);
    }, 2000)
}
while (height > 19) {
    width = body.offsetWidth;
    //console.log(width)
    const row = document.createElement('div');
    row.classList.add('row');
    body.appendChild(container);
    container.appendChild(row);
    var gridWidth = 35;
    while (width > 19) {
        var grid = document.createElement('div');
        grid.classList.add('speak');
        grid.id = id;
        grid.addEventListener('mouseover', deleteGrid);
        row.appendChild(grid);
        //console.log(grid.offsetWidth)
        grid.style.width = gridWidth + "px"; 
        grid.style.height = gridWidth + "px";
        width = width - gridWidth;
        console.log(width)
        id++;
    }
    height = height - gridWidth;
}