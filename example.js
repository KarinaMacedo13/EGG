let text = 'Esta es una prueba del programa';
document.getElementById("demo").innerHTML = text;
console.log(text);

let contenido_titulo = "<p>soy un párrafo destructor</p>"
let titulo = document.querySelector(".titulo");

titulo.innerHTML = contenido_titulo;

let textTitulo = titulo.innerText;
console.log(textTitulo);

if (textTitulo == "oy un párrafo destructor") {
  console.log("Si es");
} else {
  console.log("No se");
}

let nombre = "Karina";
let edad = "20";
let ciudad = "Arequipa";

parrafotext = document.querySelector(".parrafo");

function parrafo(nombre, edad, ciudad) {
  let parrafo = `Hola ${nombre} ${edad} ${ciudad}, espero te encuentres bien`
  return parrafo;
}

parrafotext.innerHTML = parrafo("macedo", 25, "lima");

