import { Leon } from "./clases/Leon.js"; // Importa las clases de animales desde el archivo Tipos.js
import animalesData from "./Animales.js"; // Importa el módulo de datos de animales desde el archivo Animales.js

let animales = []; // Arreglo para almacenar los objetos de animales registrados

// Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales"); // Obtiene el contenedor de la tabla de animales
  animalesTemplate.innerHTML = ""; // Limpia el contenido actual de la tabla
  animales.forEach((p, i) => {
    // Itera sobre cada animal en el arreglo
    ...
  });
  document
    .querySelectorAll(".card-body button")
    .forEach((b) => b.addEventListener("click", activarHabiblidad)); // Agrega un evento de clic a los botones para activar habilidades
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
  const animal = animales.find((a) => a.getNombre() == nombre); // Encuentra el objeto de animal correspondiente al nombre
  console.log(animal); // Imprime el objeto animal en la consola
  // Selecciona el método de sonido según el tipo de animal y lo reproduce
  nombre == "Leon"
    ? animal.Rugir()
    : nombre == "Lobo"
    ? animal.Aullar()
    : undefined;
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
  const modalBody = document.getElementsByClassName("modal-body")[0]; // Obtiene el cuerpo del modal
  const animal = animales[i]; // Obtiene el objeto de animal correspondiente al índice
  modalBody.innerHTML = `
    `; // Agrega el HTML correspondiente al cuerpo del modal para mostrar los detalles del animal
};

// Variable para almacenar la ruta de la imagen del animal seleccionado
...
// Variable para almacenar el sonido del animal seleccionado
...

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
  const animalSelected = e.target.value; // Obtiene el valor seleccionado en el elemento de selección
  const animales = await animalesData.getData(); // Obtiene los datos de animales del módulo animalesData
  const animalObject = animales.find((a) => a.name == animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado
  imagenSrc = `/assets/imgs/${animalObject.imagen}`; // Establece la ruta de la imagen del animal
  sonido = animalObject.sonido; // Establece el sonido del animal
  const preview = document.getElementById("preview"); // Obtiene el elemento de vista previa de imagen
  preview.parentElement.classList.remove("p-5"); // Remueve una clase de estilo del contenedor de la vista previa
  preview.style.backgroundImage = `url(${imagenSrc})`; // Establece la imagen de fondo de la vista previa
});

// Evento de clic en el botón de registro de animal
...
});
