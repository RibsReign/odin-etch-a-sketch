container = document.querySelector("div");

for (let index = 0; index < (16 * 16); index++) {
    const tile = document.createElement("div");
    tile.setAttribute("class", "grid");
    tile.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
    })
    tile.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "blue";
    })
    container.appendChild(tile);
}

