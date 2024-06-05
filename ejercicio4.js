
1.1
const main = document.createElement("main");
body.appendChild(main)

const boton = () => {
    main.innerHTML = `
    <input type="text" id="btnToClick"/>
    <button id="Start">Click</button>`;
const input = document.querySelector("#btnToClick");
console.log(input);
const button = document.querySelector("#Start");
console.log(button);
Start.addEventListener("click", () =>
console.log(input))}

1.2
Start.addEventListener("click", (focus) =>
    console.log(input))

1.3
Start.addEventListener("click", (input) =>
    console.log(input))