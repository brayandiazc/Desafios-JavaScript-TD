// Función constructora Consultorio
function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente;
}

// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

// Crear un nuevo paciente
var paciente1 = new Paciente("Juan", 25, "12345678-9", "Dolor de cabeza");
var paciente2 = new Paciente("Ana", 30, "98765432-1", "Dolor de estómago");
var paciente3 = new Paciente("Pedro", 35, "12345678-9", "Dolor de espalda");

// Crear un nuevo consultorio y vincularlo con un paciente
var consultorio2 = new Consultorio("Consultorio 2", [paciente2]);

// Crear un nuevo consultorio y vincularlo con los pacientes
var consultorio = new Consultorio("Consultorio 1", [
  paciente1,
  paciente2,
  paciente3,
]);

// Mostrar el nombre del consultorio
console.log(consultorio.nombre);

// Mostrar el nombre del paciente
console.log(consultorio.paciente[0].nombre);
console.log(consultorio.paciente[1].nombre);
console.log(consultorio.paciente[2].nombre);
