
1.7

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
main.appendChild("ul");
const li = document.createElement("li");
ul.appendChild("li");

for (const album of albums) {
    const lis = document.querySelector("li");
    lis.textContent = album;
}