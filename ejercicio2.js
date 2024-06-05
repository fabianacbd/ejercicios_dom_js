2.1
const vacio = document.createElement("div");

2.2
const parrafo = document.createElement("p");
div.appendChild(parrafo);

2.3
const sexto = document.createElement("div");
const parrafos = document.createElement("p", [6])
sexto.appendChild(parrafos);

2.4
const div = document.createElement("div");
div.innerHTML = '</p>Soy dinamico!<p>'
document.body.appendChild(div)

2.5
const h2 = document.querySelector("h2");
h2.textcontent = 'Wubba Lubba dub dub';

2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (const app of apps) {
    const lis = document.createElement("ul");
    const list = document.createElement("li");
    list.textContent = app;
    lis.appendChild(list)
}

2.7
const borrar = document.querySelector(".fn-remove-me");
borrar.classList.remove(bye);

2.8
const medio = document.createElement("p")
medio.textContent = "Voy en medio!";
sexto.appendChild(medio);

2.9
const dentro = document.createElement("p")
dentro.textContent = "Voy dentro!";
div.appendChild(dentro);

