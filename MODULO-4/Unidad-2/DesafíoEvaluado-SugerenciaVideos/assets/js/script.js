// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
  let inyectarTodo = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };

  return {
    mostrarTodo: (url, id) => inyectarTodo(url, id),
  };
})();

// Definición de la clase Multimedia para manejar la URL
class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = () => _url;
  }

  // Getter para obtener la URL
  ...

  // Método para establecer el inicio del video (no implementado)
  ...
}

// Definición de la clase Reproductor que hereda de Multimedia
...

  // Método para establecer el inicio del video
  setInicio(tiempo) {
    // Modifica la URL del video para iniciar en un tiempo específico
    this.getId().setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

// Crear instancias de Reproductor para reproducir diferentes videos
let playMusica = new Reproductor(
  "...",
  musica
);
playMusica.playMultimedia();
playMusica.setInicio(200);

let playPelicula = new Reproductor(
  "...",
  peliculas
);
playPelicula.playMultimedia();

let playSerie = new Reproductor(
  "...",
  series
);
playSerie.playMultimedia();
