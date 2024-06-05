1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

for (const country of countries) {
    const ul = document.createElement("ul");
    const lis = document.createElement("li");
    lis.textContent = country;
    ul.appendChild(lis)

}

1.2
const borrar = document.querySelector(".fn-remove-me");
borrar.classList.remove("foo");

1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const datafunction = document.querySelector("#printHere")
for (const car of cars) {
    const ul = document.createElement("ul")
    const lis = document.createElement("li")
    ul.appendChild(lis)
}

1.4
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const country of countries) {
    const div = document.createElement("div")
    const h4 = document.createElement("h4")
    h4.textContent = country.title;
    const image = document.createElement("img");
    image.src = country.imgUrl;
    image.alt = country.title;
    h4.appendChild(image);
}

1.5

const button = document.createElement("button");
button.addEventListener("click", (ev) => (
const borrar = document.querySelector("country");
borrar.classList.remove("country");)

1.6
const button = document.createElement("button");
button.addEventListener("click", (ev) => (
    button.classList.remove("country")
))
