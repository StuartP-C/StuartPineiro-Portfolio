document.getElementById('factura-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores de cada campo y elimina espacios
    const cliente = document.getElementById('cliente').value.trim();
    const articulo = document.getElementById('articulo').value.trim();
    const cantidad = document.getElementById('cantidad').value.trim();
    const precio = document.getElementById('precio').value.trim();

    // Validaciones de cada campo
    if (cliente === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error en el campo "Cliente"',
            text: 'Por favor ingrese un nombre para el cliente.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    if (articulo === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error en el campo "Artículo"',
            text: 'El campo Artículo no puede estar vacío.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    if (cantidad === '' || isNaN(cantidad) || parseInt(cantidad) <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el campo "Cantidad"',
            text: 'La cantidad debe ser un número entero mayor a 0.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    if (precio === '' || isNaN(precio) || parseFloat(precio) <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el campo "Precio"',
            text: 'El precio debe ser un número mayor a 0.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // Si todas las validaciones pasan, proceder con los cálculos
    const cantidadValida = parseInt(cantidad);
    const precioValido = parseFloat(precio);
    const subtotal = cantidadValida * precioValido;
    const iva = subtotal * 0.13;
    const servicio = subtotal * 0.05;
    const total = subtotal + iva + servicio;

    // Insertar resultados en la lista de resultados
    const resultados = `
        <li>Nombre del cliente: ${cliente}</li>
        <li>Artículo comprado: ${articulo}</li>
        <li>Cantidad: ${cantidadValida}</li>
        <li>Precio: ₡${precioValido.toFixed(2)}</li>
        <li>Subtotal: ₡${subtotal.toFixed(2)}</li>
        <li>IVA (13%): ₡${iva.toFixed(2)}</li>
        <li>Servicio (5%): ₡${servicio.toFixed(2)}</li>
        <li>Total a pagar: ₡${total.toFixed(2)}</li>
    `;
    
    document.getElementById('factura-resultados').innerHTML = resultados;
});
