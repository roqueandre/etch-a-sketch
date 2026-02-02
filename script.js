const btn = document.querySelector("button");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset");



// Create grid and add random color
function createGrid(size, total) {
    for (let i = 0; i < total; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid-item");
        grid.style.width = `${100 / size}%`;
        grid.style.height = `${100 / size}%`;
        btn.value = size;
        container.appendChild(grid);

        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let opac = 10;

               
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = `rgba(${red},${green},${blue}, ${opac}%)`;
            opac += 10; 
        });
    }


};


function destroyGrid () {
    let grid = document.querySelectorAll(".grid-item")
    grid.forEach((grid) => {
        grid.remove();
    });  
}

// Destroy grid first then prompt user to select squares
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






