function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Obtener el elemento de Lottie y el audio
const animacion = document.getElementById("animacion");
const audio = document.getElementById("audio");

// Función para reproducir animación y audio al hacer clic
animacion.addEventListener("click", () => {
  // Reproducir la animación
  animacion.play();
  // Reproducir el audio
  audio.play();
});

function mostrarSeccion() {
  // Obtener el valor seleccionado
  const seleccion = document.getElementById("subMenu").value;

  // Ocultar todas las secciones primero
  document.getElementById("seccion4").classList.add("d-none");
  document.getElementById("seccion5").classList.add("d-none");

  // Mostrar la sección correspondiente
  if (seleccion === "opcion1") {
      document.getElementById("seccion4").classList.remove("d-none");
  } else if (seleccion === "opcion2") {
      document.getElementById("seccion5").classList.remove("d-none");
  }
}
