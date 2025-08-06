window.onload = function () {
    //combo llamado modelo ID isando el evento onchange que se usa en combos dinamicos
    document.getElementById("modelo").onchange = function (e) {
        //destino del calor seleccionado combo1
        a = e.target.value;
        if (a =="iPhone12") {
            var imagen = "imagenes/iphone12.png";
        } else if (a == "iPhone13") {
            var imagen = "imagenes/iphone13.png";
        } else if (a== "iPhone14") {
            var imagen = "imagenes/iphone14.png";
        }else if (a=="iPhone15") {
            var imagen = "imagenes/iphone15.png";
        }
        //agrega la imagen del carro modelo
        document.getElementById("imagen").src = imagen;
    }
    //combo llamado version ID
    document.getElementById("version").onchange = function(es){
        //destino del valor seleccionado combo2
        n = es.target.value;
    }
}

function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text:"Seleccionar el modelo y la versión del iPhone",
        })
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text:"Seleccionar el modelo y la versión del iPhone",
        })
    }

    var montoCuota = 0;
    switch (a) {
        case "iPhone12":
            if (n == "125gb")
                montoCuota = 60;
            else
                montoCuota = 120;
            break;
            case "iPhone13":
            if (n == "125gb")
                montoCuota = 70;
            else
                montoCuota = 120;
           
            case "iPhone14":
            if (n == "125gb")
                montoCuota = 100;
            else
                montoCuota = 150;
            
            case "iPhone15":
            if (n == "125gb")
                montoCuota = 200;
            else
                montoCuota = 300;
            default:
                break;
    }

    //Variable que almacena la ruta de las imagenes
    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    swal.fire({
        //la variable imgurl permite cargar la imagen del carro dentro del desplegable
        //a es el targe modelo y n e sel tarfer de la version del carro
        imageUrl: imagenDireccion,
        html: "<Pp> Mira la cuota mensual del " +
        " " +
        n +
        "<br><br> <strong> Cuota mensual: </strong><p/>" +
        "$" +
        //variable qie trae el dato de si monto de cuota mensual
        montoCuota,
    //ancho y altura de la imagen
    imageWidth: 600,
    imageHeight: 250,
    //accesibilidad de la imagen
    imageAlt: a,
    });
}