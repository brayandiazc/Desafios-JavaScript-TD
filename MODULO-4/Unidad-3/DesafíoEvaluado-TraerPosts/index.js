/** Definimos una función asincrónica para obtener publicaciones desde una API */
const getPosts = async () => {
  try {
    // Realizamos una solicitud a la API usando fetch
    let response = await fetch("...");
    // Esperamos la respuesta y la convertimos en formato JSON
    let data = ...

    // Verificamos si los datos obtenidos no son nulos
    if (data !== null) {
      // Mapeamos los datos para crear elementos HTML
      ...
    }
  } catch (error) {
    // Capturamos y mostramos errores en la consola
    console.log(error);
  }
};
