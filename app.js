container = document.querySelector("div");

for (let index = 0; index < (16 * 16); index++) {
    const divG = document.createElement("div");
    divG.setAttribute("class", "grid");
    container.appendChild(divG);
}
//divG.textContent = "BOO";
