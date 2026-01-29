const btn = document.querySelector("button");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
let gridy = document.querySelector(".grid-item");


function createGrid(size, total) {
    for (let i = 0; i < total; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid-item");
        grid.style.width = `${100 / size}%`;
        grid.style.height = `${100 / size}%`;
        btn.value = size;
        container.appendChild(grid);
    }
};

function destroyGrid () {
    let grid = document.querySelectorAll(".grid-item")
    grid.forEach((grid) => {
        grid.remove();
    });  
}


btn.addEventListener("click", () => {
    destroyGrid();
    let option = prompt("Choose the number of squares per side: ");
    if (option <= 100) {
        let gridSize = option;
        const gridTotal = gridSize * gridSize;
        createGrid(gridSize, gridTotal);
    } else {
        alert("Exceed maximum number of squares. Please insert a number lower than 100.")
    };
});






