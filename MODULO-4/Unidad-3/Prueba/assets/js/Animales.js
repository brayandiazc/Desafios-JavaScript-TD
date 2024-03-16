// Este código define un módulo para obtener datos de animales desde un archivo JSON.

let animales = (() => {
  const url = "../../animales.json"; // La URL del archivo JSON.

  // Función asincrónica para obtener los datos de la URL.
  const getData = async () => {
    const res = await fetch(url); // Realiza una solicitud de red.
    const { animales } = await res.json(); // Extrae la lista de animales del JSON.
    return animales; // Retorna la lista de animales.
  };

  // Retorna un objeto con la función getData.
  return { getData };
})();

export default animales; // Exporta el módulo.
