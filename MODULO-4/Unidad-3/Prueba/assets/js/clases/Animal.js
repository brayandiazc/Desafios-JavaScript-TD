// Definición de la clase Animal para representar objetos de animales.

class Animal {
  // Constructor de la clase Animal.
  constructor(nombre, edad, img, comentarios, sonido) {
    // Propiedades privadas utilizando let y métodos de acceso.
    let Nombre = nombre;
    this.getNombre = () => Nombre;

    // Las demas propiedades privadas se definen de la misma manera.
    ...
  }

  // Métodos de acceso para las propiedades privadas.

  // Método para obtener el nombre del animal.
  get Nombre() {
    return this.getNombre();
  }

  // Otros métodos de acceso.
  ...
}

export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.
