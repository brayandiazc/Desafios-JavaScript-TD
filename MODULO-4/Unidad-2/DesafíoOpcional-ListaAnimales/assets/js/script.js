// Selecciona el formulario del HTML
let formulario = document.querySelector("form");

// Función que maneja el evento de agregar una mascota
let agregando = (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario

  // Obtiene los valores ingresados en el formulario
  let propietario = document.getElementById("propietario").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let direccion = document.getElementById("direccion").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let telefono = document.getElementById("telefono").value;
  let tipo = document.getElementById("tipo").value;

  // Crea una instancia de Mascota según el tipo seleccionado
  let mascota = new Mascota(
    propietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  );
  // Muestra el resultado en la página
  mostrarResultado(mascota);
};

// Función que muestra el resultado de la información ingresada
let mostrarResultado = (valor) => {
  ...

  // Crea elementos de lista para mostrar los datos de la mascota
  ...
};

// Agrega un listener al evento submit del formulario
formulario.addEventListener("submit", agregando);

// Definición de la clase Propietario
class Propietario {
  constructor(nombreP, direccion, telefono) {
    this.nombreP = nombreP;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  ...
}

// Definición de la clase Animal que hereda de Propietario
...

// Definición de la clase Mascota que hereda de Animal
...