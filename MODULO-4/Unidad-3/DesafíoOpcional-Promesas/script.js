// Función asíncrona para obtener datos de la URL y mostrar los títulos de las fotos cuyos IDs sean menores que 20
const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    // Realiza la petición a la URL
    const response = await fetch(url);
    // Convierte la respuesta en formato JSON
    const datos = await response.json();
    // Muestra los títulos de las fotos cuyos IDs son menores que 20
    datos.forEach((element) => {
      if (element.id < 20) {
        console.log(element.title);
      }
    });
    // Maneja cualquier error que ocurra durante la petición o el procesamiento de los datos
  } catch (err) {
    console.log(err);
  } // Función asíncrona para obtener datos de la URL y mostrar los títulos de las fotos cuyos IDs sean menores que 20
  const getDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
      // Realiza la petición a la URL
      const response = await fetch(url);
      // Convierte la respuesta en formato JSON
      const datos = await response.json();
      // Muestra los títulos de las fotos cuyos IDs son menores que 20
      datos.forEach((element) => {
        if (element.id < 20) {
          console.log(element.title);
        }
      });
      // Maneja cualquier error que ocurra durante la petición o el procesamiento de los datos
    } catch (err) {
      console.log(err);
    }
  };

  // Llama a la función para obtener y mostrar los datos
  getDatos();

  // Función que devuelve una promesa que se resuelve después de 3 segundos con el mensaje 'Información Enviada'
  const mensajeInterno = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Información Enviada");
      }, 3000);
    });
  };

  // Función asíncrona que espera a que se resuelva la promesa devuelta por mensajeInterno y luego muestra el mensaje
  const getMensaje = async () => {
    // Espera a que se resuelva la promesa
    const res = await mensajeInterno();
    // Muestra el mensaje en la consola
    console.log(res);
  };

  // Llama a la función para obtener y mostrar el mensaje
  getMensaje();
};

// Llama a la función para obtener y mostrar los datos
getDatos();

// Función que devuelve una promesa que se resuelve después de 3 segundos con el mensaje 'Información Enviada'
const mensajeInterno = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
};

// Función asíncrona que espera a que se resuelva la promesa devuelta por mensajeInterno y luego muestra el mensaje
const getMensaje = async () => {
  // Espera a que se resuelva la promesa
  const res = await mensajeInterno();
  // Muestra el mensaje en la consola
  console.log(res);
};

// Llama a la función para obtener y mostrar el mensaje
getMensaje();
