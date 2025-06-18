


const container = document.querySelector(".menu-container");
const btn = document.querySelector(".reset");

for (let i=0; i<256; i++) {
    const child_divs = document.createElement("div");
    child_divs.classList.add("items");
    child_divs.setAttribute("style", "background: peachpuff; border: 1px solid brown; height: 40px; width: 40px; box-sizing: border-box;");
    container.appendChild(child_divs)
}


container.addEventListener("mouseover", function (e) {
    if (e.target && e.target.classList.contains("items")) {
        e.target.style.backgroundColor = "black"; // Or any hover color
    }
});

btn.addEventListener("click", function (e) {
    let size = parseInt(prompt("What's your desired new board size?"));
    container.innerHTML = "";
    container.style.width = `${size * 40}px`; // Adjust width to fit new size
    for (let i=0; i<size * size; i++) {
        const child_divs = document.createElement("div");
        child_divs.classList.add("items");
        child_divs.setAttribute("style", "background: peachpuff; border: 1px solid brown; height: 40px; width: 40px; box-sizing: border-box;");
        container.appendChild(child_divs)
    }
});