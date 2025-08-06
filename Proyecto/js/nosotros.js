//recibe el controlador de eventos y el ID de cada contenido
function opciones(evt, info) {
    //declaración de variables
    //i controla el for
    //tabcontent controla el contenido de los TABS
    //tablinks controla los enlaces de los TABS
    var i, tabcontent, tablinks;

    //obtener todos los elementos con class = "tabcontent" y ocúltelos
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    //apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //apunta a todos lo elementos con class = "tablinks" y elimine la clase "active"
    //muestra la pensaña actual y agrega una clase "activa" al botón que abrió la pestaña
    document.getElementById(info).style.display = "block";
    evt.currentTarget.className += " active";
}

//obtener el modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");

// Obtiene todos los modales
var modals = [modal1, modal2, modal3, modal4];

// Obtiene todos los botones de cierre
var cerrar = document.getElementsByClassName("close");

// Itera sobre cada botón de cierre para asignar su función
for (let i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
        modals[i].style.display = "none";
    };
}

//obtener la img y agregarla dentro del modal
//usar el texto alt como subtitulo

//imagen
var img1 = document.getElementById("imgModal1");
var img2 = document.getElementById("imgModal2");
var img3 = document.getElementById("imgModal3");
var img4 = document.getElementById("imgModal4");
//contenido
var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
//titulo
var captionText1 = document.getElementById("caption1");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");

//al dar clic a la foto en pequeño
img1.onclick = function() {
    //desplegar la foto
    modal1.style.display = "block";
    //apunta el contenido del modal
    modalImg1.src = this.src;
    //asigna el alt debajo de la img
    captionText1.innerHTML = this.alt;
}

img2.onclick = function() {
    //desplegar la foto
    modal2.style.display = "block";
    //apunta el contenido del modal
    modalImg2.src = this.src;
    //asigna el alt debajo de la img
    captionText2.innerHTML = this.alt;
}

img3.onclick = function() {
    //desplegar la foto
    modal3.style.display = "block";
    //apunta el contenido del modal
    modalImg3.src = this.src;
    //asigna el alt debajo de la img
    captionText3.innerHTML = this.alt;
}

img4.onclick = function() {
    //desplegar la foto
    modal4.style.display = "block";
    //apunta el contenido del modal
    modalImg4.src = this.src;
    //asigna el alt debajo de la img
    captionText4.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
// var cerrar = document.getElementsByClassName("close")[0];

// //cuando el usuario hace click en <span> (x), cierre el modal
// cerrar.onclick = function() {
//     modal1.style.display = "none";
// }

// cerrar.onclick = function() {
//     modal2.style.display = "none";
// }

// cerrar.onclick = function() {
//     modal3.style.display = "none";
// }

// cerrar.onclick = function() {
//     modal4.style.display = "none";
// }