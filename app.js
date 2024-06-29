const container = document.querySelector("#container");

const sliderText = document.querySelector("p");
const slider = document.querySelector("input");
slider.addEventListener("change", () => {
    gridCount = slider.value;
    sliderText.textContent = `Grid size is: ${slider.value}`;
    makeGrid();
})
let gridCount = 16;

let isDrawing = false;
function colorOnHighlight(event) {
    if (!isDrawing) {
        event.target.style.backgroundColor = "white";
    }
}
function colorOnStart(event) {
    if (!isDrawing) {
        event.target.style.backgroundColor = "blue";
    }
}
function mouseClick(event) {
    isDrawing = !isDrawing;
    colorOnClick(event);
}
function mouseLift(event) {
    isDrawing = false;
}
function colorOnClick(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = "black";
        event.target.removeEventListener("mouseover", colorOnHighlight);
        event.target.removeEventListener("mouseout", colorOnStart);
    }

}
function makeGrid() {
    container.innerHTML = '';
    container.style.setProperty('--grid-count', gridCount);
    for (let index = 0; index < (gridCount * gridCount); index++) {
        const tile = document.createElement("div");
        tile.setAttribute("class", "grid");
        tile.addEventListener("mouseover", colorOnHighlight);
        tile.addEventListener("mouseout", colorOnStart);
        tile.addEventListener("mousedown", mouseClick);
        document.addEventListener("mouseup", mouseLift);
        tile.addEventListener("mousemove", colorOnClick);
        tile.addEventListener('dragstart', function (event) {
            event.preventDefault();
        });
        container.appendChild(tile);
    }
}

makeGrid()