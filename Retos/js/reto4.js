// evento que carga la imagen por defecto automáticamente
window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/reto4Inicio.jpg' class='img-fluid rounded' alt='inicio' />";
    
    // evento para cambiar la imagen y el texto al seleccionar un volcán
    document.getElementById("volcan").onchange = function(e) {
        let n = e.target.value;
        let imagen = "<img src='imagenes/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='volcan' />";
        let text = ["Volcán Arenal: Ubicado en Alajuela, es uno de los volcanes más activos de Costa Rica. Aunque su última erupción fue en 2010, sigue siendo una atracción popular gracias a sus alrededores llenos de selva, senderos y aguas termales, ideales para el ecoturismo.",
            "Volcán Irazú: En Cartago, el Irazú es el volcán más alto del país, alcanzando 3,432 metros. Es famoso por su cráter con un lago verde esmeralda y, en días despejados, permite ver ambos océanos. Su última gran erupción fue en 1963.",
            "Volcán Poás: Este volcán de Alajuela tiene uno de los cráteres más grandes del mundo, con un lago ácido de color turquesa. Activo y popular entre los visitantes, el Poás ofrece miradores y senderos en un entorno natural espectacular.",
            "Volcán Rincón de la Vieja: Ubicado en Guanacaste, este volcán complejo tiene varios cráteres y manifestaciones termales como fumarolas y géiseres. El parque que lo rodea es ideal para explorar cascadas y disfrutar de su biodiversidad.",
            "Volcán Turrialba: En Cartago, es uno de los volcanes activos de Costa Rica y ha tenido erupciones recientes. Menos visitado por turistas debido a su actividad, ofrece vistas de la cordillera y es monitoreado constantemente debido a su proximidad a zonas pobladas.",
        ];

        // muestra la imagen y el texto correspondientes
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];
    };
};

// función del botón Reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/reto4Inicio.jpg' class='img-fluid rounded' alt='inicio' />";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("volcan").value = "";
};
