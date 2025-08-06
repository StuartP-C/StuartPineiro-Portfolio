//variable de arreglo
let miniCarrousel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto
miniCarrousel = [{ imageurl: "img/miniCarousel1.jpg", titulo: "Imagen 1"},
    { imageurl: "img/miniCarousel2.jpg", titulo: "Imagen 2"},
    { imageurl: "img/miniCarousel3.jpg", titulo: "Imagen 3"},
    { imageurl: "img/miniCarousel4.jpg", titulo: "Imagen 4"},
    { imageurl: "img/miniCarousel5.jpg", titulo: "Imagen 5"},
    { imageurl: "img/miniCarousel5.jpg", titulo: "Imagen 5"},
];

//funcion que permite cambiar las imagenes (anterior y siguiente)

let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = miniCarrousel.length;
    //almacena la prxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto >= total) {
        foto = 0;
    }
    if (foto < 0) {
        foto = total - 1;
    }     

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    //permite apuntar el arreglo de las fotos con la ruta de cada una
    document.thumb.src = miniCarrousel[foto - 1].imageurl;
    //asiganacion del ID titulo
    titulo = document.getElementById('titulo');
    //asigancion del arreglo para referenciar la foto con el titulo
    titulo.innerText = miniCarrousel[foto].titulo;
}

/*BLOQUE 1*/
/*funcion ejecutar (div, video_id):
Esta funcion se utiliza para revelar un lightbox y agregar la reproduccion automática de un video de YT
Recibe dos parámetros: div y video_id
Se obtiene la URL del video de YT utilizando el ID del video proporcionado
Luego, se agrega el parámetro autoplay=1 a la URL del video para habilitar la reproduccion automática
Después, se muestra el elemento HTML con el ID especificado por div, lo que revela el lightbox y muestra el video
*/

//funcion para revelar lightbox y agregar reproduccion automática de YT
function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    // Agregar autoplay solo si no está ya presente
    if (!video.includes('autoplay=1')) {
        document.getElementById(video_id).src = video + '&autoplay=1';
    }
    document.getElementById(div).style.display = 'block';
}

/*BLOQUE 2*/
/*funcion ocultar (div, video_id):
Esta funcion se utiliza para ocultar el lightbox y detener la reproduccion automática de un video de YT
También recibe dos parámetros: div y video_id
Se obtiene la URL del video de YT utilizando el ID del video proporcionado
Luego, se elimina el parámetro autoplay=1 a la URL del video para habilitar la reproduccion automática
Después, se muestra el elemento HTML con el ID especificado por div, lo que oculta el lightbox y detiene la reproduccion del video
*/

//ocultar la caja y eliminar la reproduccion autimática de YT
function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1','');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}