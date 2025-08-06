//popover
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Mostrar y ocultar secciones según la selección del usuario
document.getElementById('sectionSelector').addEventListener('change', function () {
    const selectedValue = this.value;

    // Ocultar todas las secciones
    document.getElementById('ventajas').classList.add('d-none');
    document.getElementById('relatos').classList.add('d-none');

    // Mostrar la sección seleccionada
    if (selectedValue) {
        document.getElementById(selectedValue).classList.remove('d-none');
    }
});
