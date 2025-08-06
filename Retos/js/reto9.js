function evaluarEncuesta() {
    // Obtener la respuesta de la pregunta 1
    var respuesta1 = "";
    document.getElementsByName("opinion2").forEach(radio => {
        if (radio.checked) {
            respuesta1 = radio.value;
        }
    });

    // Validación de datos ingresados para pregunta 1
    if (respuesta1 === "") {
        Swal.fire({
            title: "Atención usuario",
            text: "No deje campos vacíos en la pregunta 1.",
            icon: "warning"
        });
        return;
    }

    // Determinar mensaje según respuesta en pregunta 1
    var mensaje3 = "";
    if (respuesta1 === "Buena") {
        mensaje3 = "Nos alegra mucho saber que tuviste una buena experiencia. Seguiremos mejorando.";
    } else if (respuesta1 === "Regular") {
        mensaje3 = "Gracias por su sinceridad. Trabajaremos para mejorar nuestro servicio.";
    } else {
        mensaje3 = "Lamentamos que la su experiencia no haya cumplido sus expectativas. Continuamos mejorando.";
    }

    // Evaluar respuestas de la pregunta 2 (checkboxes)
    var mensaje1 = "";
    if (document.formulario.atencion.checked && document.formulario.calidad.checked && document.formulario.servicio.checked) {
        mensaje1 = "¡Gracias por valorar positivamente nuestros vinos!";
    } else if (!document.formulario.atencion.checked || !document.formulario.calidad.checked || !document.formulario.servicio.checked) {
        mensaje1 = "Agradecemos su respuesta. Tomaremos en cuenta su opinión para mejorar la experiencia de cata.";
    }

    // Mostrar resultados
    document.getElementById("res0").innerHTML = "¡Gracias por sus respuestas!";
    document.getElementById("res2").innerHTML = mensaje3;
    document.getElementById("res3").innerHTML = mensaje1;
}
