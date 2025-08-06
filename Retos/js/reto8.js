const competidores = [];

function agregarCompetidor() {
    const nombre = document.getElementById('nombre').value,
        apellidoCompetidor = document.getElementById('apellidos').value,
        puntaje1 = parseFloat(document.getElementById('nota1').value),
        puntaje2 = parseFloat(document.getElementById('nota2').value),
        puntaje3 = parseFloat(document.getElementById('nota3').value);

    if(nombre === '' || apellidoCompetidor === '' || isNaN(puntaje1) || isNaN(puntaje2) || isNaN(puntaje3)) {
        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: { popup: "animate__animated animate__fadeIn" },
            hideClass: { popup: "animate__animated animate__fadeOut" }
        });
    } else {
        const promedio = (puntaje1 + puntaje2 + puntaje3) / 3;
        competidores.push({ nombre, apellidoCompetidor, promedio });
        
        const selectCompetidores = document.getElementById('seleccionarCompetidor');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoCompetidor;
        option.text = nombre + ' ' + apellidoCompetidor;
        selectCompetidores.appendChild(option);

        limpiarDatos();
        Swal.fire({
            icon: "success",
            title: "Competidor agregado",
            showClass: { popup: "animate__animated animate__fadeIn" },
            hideClass: { popup: "animate__animated animate__fadeOut" }
        });
    }
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('seleccionarCompetidor').value;
    const resultado = document.getElementById('resultado');
    let competidorSeleccionado = null;

    for (let i = 0; i < competidores.length; i++) {
        const competidor = competidores[i];
        const nombreCompleto = competidor.nombre + ' ' + competidor.apellidoCompetidor;
        if(nombreCompleto === nombreSeleccionado) {
            competidorSeleccionado = competidor;
            break;
        }
    }

    if(competidorSeleccionado) {
        const promedioCompetidor = competidorSeleccionado.promedio;
        resultado.textContent = 'El puntaje final de: ' + nombreSeleccionado + ' es de: ' + promedioCompetidor;
    } else {
        resultado.textContent = '';
    }
}

function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}
