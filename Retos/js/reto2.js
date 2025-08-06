// Función para convertir dólares a colones
function convertirADolares() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambio1').value);
    
    if (isNaN(dolares) || isNaN(tipoCambio)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese valores válidos en ambos campos.'
      });
    } else if (dolares <= 0 || tipoCambio <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Valor no válido',
        text: 'Los valores deben ser mayores que 0.'
      });
    } else {
      const resultado = dolares * tipoCambio;
      document.getElementById('resultado1').value = resultado.toFixed(2);
    }
  }
  
  // Función para limpiar el primer formulario
  function limpiarFormulario1() {
    document.getElementById('dolares').value = '';
    document.getElementById('tipoCambio1').value = '';
    document.getElementById('resultado1').value = '';
  }
  
  // Función para convertir colones a dólares
  function convertirAColones() {
    const colones = parseFloat(document.getElementById('colones').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambio2').value);
    
    if (isNaN(colones) || isNaN(tipoCambio)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese valores válidos en ambos campos.'
      });
    } else if (colones <= 0 || tipoCambio <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Valor no válido',
        text: 'Los valores deben ser mayores que 0.'
      });
    } else {
      const resultado = colones / tipoCambio;
      document.getElementById('resultado2').value = resultado.toFixed(2);
    }
  }
  
  // Función para limpiar el segundo formulario
  function limpiarFormulario2() {
    document.getElementById('colones').value = '';
    document.getElementById('tipoCambio2').value = '';
    document.getElementById('resultado2').value = '';
  }
  