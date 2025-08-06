// Variables controladores
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/iglesia.jpg');

// Agregar un evento para ajustar la posición inicial de la cámara al cargar la panorámica
panorama.addEventListener('load', function() {
    // Establecer la posición inicial de la cámara en las coordenadas (500, 47, 6)
    viewer.tweenControlCenter(new THREE.Vector3(500, 47, 6), 0);
});


//zona interacción1 (organo)
var infospot1 = new PANOLENS.Infospot(70, PANOLENS.DataImage.Info); //50 es el radio de área de interacción con el usuario
//el infospot es un marcador interactivo que aparece en la escena para mostrar información
//establecen las coordenadas x y z z posición tridimencional del infospot dentro de la panorámica. por ejemplo, x=0, y=0, z=-500
infospot1.position.set(-500 ,363 , 1);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente
infospot1.addHoverText('El órgano de la Herz-Jesu-Kirche se encuentra ubicado en la galería o tribuna sobre la entrada principal. Es un órgano histórico que ha sido restaurado y que añade una dimensión musical especial al ambiente. Este instrumento se utiliza tanto en las misas como en conciertos, aprovechando la acústica del lugar para llenar el espacio con su sonido envolvente.', -60);
//apariencia cuadro informativo
infospot1.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">El órgano de la Herz-Jesu-Kirche se encuentra ubicado en la galería o tribuna sobre la entrada principal. Es un órgano histórico que ha sido restaurado y que añade una dimensión musical especial al ambiente. Este instrumento se utiliza tanto en las misas como en conciertos, aprovechando la acústica del lugar para llenar el espacio con su sonido envolvente. </div>';
panorama.add(infospot1)

//zona interaccion 2 (pilar)
var infospot2 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info); //50 es el radio de área de interacción con el usuario
infospot2.position.set(-330 ,188 , 500);
infospot2.addHoverText('El interior de la iglesia cuenta con una rica decoración neogótica, que incluye detalles en columnas, bóvedas y arcos. Este estilo crea una atmósfera solemne y espiritual, con un ambiente que destaca por su elegancia y serenidad.', -60);
infospot2 .element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">El interior de la iglesia cuenta con una rica decoración neogótica, que incluye detalles en columnas, bóvedas y arcos. Este estilo crea una atmósfera solemne y espiritual, con un ambiente que destaca por su elegancia y serenidad.</div>';
panorama.add(infospot2)

//zona interaccion 3 (pizarra de anuncios)
var infospot3 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info); 
infospot3.position.set(-92 ,31 , -501);
infospot3.addHoverText('Una pizarra de anuncios en una iglesia sirve para informar sobre actividades, eventos, y mensajes importantes como horarios de misas, retiros, oportunidades de voluntariado, y campañas de donación. También ofrece inspiración con citas bíblicas y facilita la integración de visitantes al mostrar formas de participar en la comunidad.', -60);
infospot3.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">Una pizarra de anuncios en una iglesia sirve para informar sobre actividades, eventos, y mensajes importantes como horarios de misas, retiros, oportunidades de voluntariado, y campañas de donación. También ofrece inspiración con citas bíblicas y facilita la integración de visitantes al mostrar formas de participar en la comunidad. </div>';
panorama.add(infospot3)

//zona interaccion 4 (altar)
var infospot4 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info); 
infospot4.position.set(500 ,30 , 3);
infospot4.addHoverText('El altar principal, con intrincadas tallas de madera, es una obra central del interior. Está adornado con símbolos religiosos y motivos ornamentales que representan temas del Sagrado Corazón de Jesús, dando un toque cálido y ceremonial al espacio sagrado.', -60);
infospot4.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">El altar principal, con intrincadas tallas de madera, es una obra central del interior. Está adornado con símbolos religiosos y motivos ornamentales que representan temas del Sagrado Corazón de Jesús, dando un toque cálido y ceremonial al espacio sagrado. </div>';
panorama.add(infospot4)

//zona interaccion 5 (bancos)
var infospot5 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info); 
infospot5.position.set(192 ,-181 , -500);
infospot5.addHoverText('Un banco de iglesia es un asiento largo de madera, diseñado para que varias personas se sienten durante las ceremonias religiosas. Suelen estar alineados en filas frente al altar y, a menudo, incluyen un reclinatorio para arrodillarse en momentos de oración.', -60);
infospot5.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">Un banco de iglesia es un asiento largo de madera, diseñado para que varias personas se sienten durante las ceremonias religiosas. Suelen estar alineados en filas frente al altar y, a menudo, incluyen un reclinatorio para arrodillarse en momentos de oración. </div>';
panorama.add(infospot5)

//zona interaccion 6 (confesionarios)
var infospot6 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info); 
infospot6.position.set(123 ,51 , 499);
infospot6.addHoverText('Los confesionarios son espacios cerrados en las iglesias, destinados a la confesión. Están divididos por una rejilla que separa al sacerdote del penitente, permitiendo una conversación privada y a menudo anónima. Este diseño crea un ambiente de introspección y arrepentimiento.', -60);
infospot6.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">Los confesionarios son espacios cerrados en las iglesias, destinados a la confesión. Están divididos por una rejilla que separa al sacerdote del penitente, permitiendo una conversación privada y a menudo anónima. Este diseño crea un ambiente de introspección y arrepentimiento. </div>';
panorama.add(infospot6)


//zona interacción 7 con video (coro)
var infospot7 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot7 = new PANOLENS.Infospot(25, 'imagenes/music.png'); 
//establece las coordenadas x y z psoicon tridimencional del INfospot dentro de la panoramica
infospot7.position.set(500 ,-63 , 2);
infospot7.addHoverText('La Herz-Jesu-Kirche es conocida por su excelente acústica, que realza la calidad del sonido en el espacio. La estructura del edificio permite que la música de orquestas y coros se proyecte con claridad y resonancia, haciendo de este lugar un sitio perfecto para conciertos y eventos musicales.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot7.element.innerHTML = `
    <div>
        <iframe width="720" height="480" src="https://www.youtube.com/embed/HUmNgAdD7G4" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
`;
panorama.add(infospot7)

//zona interacción 8 con audio (organo)
var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infospot8 = new PANOLENS.Infospot(50, 'imagenes/music2.png');
//establece las coordenadas x y z psoicon tridimencional del INfospot dentro de la panoramica
infospot8.position.set(-501 ,494 , 4);
infospot8.addHoverText('Un audio MP· multimedial...', -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0,); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;"><audio controls><source src="audios/audio1.mp3" type="audio/mpeg"></audio></div>'
panorama.add(infospot8)

//zona interaccion 9 (tragaluz)
var infospot9 = new PANOLENS.Infospot(60, PANOLENS.DataImage.Info); 
infospot9.position.set(453 ,500 , 4);
infospot9.addHoverText('La ilustración representa escenas del Sagrado Corazón de Jesús, un símbolo central en la devoción católica, que enfatiza el amor y la compasión de Cristo. La luz que cae a través del tragaluz refuerza el simbolismo de iluminación divina, destacando el altar como el foco espiritual de la iglesia y añadiendo una atmósfera solemne y contemplativa al espacio.', -60);
infospot9.element.innerHTML = '<div style="background-color: #86b1ee88; color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width: 200px;">La ilustración representa escenas del Sagrado Corazón de Jesús, un símbolo central en la devoción católica, que enfatiza el amor y la compasión de Cristo. La luz que cae a través del tragaluz refuerza el simbolismo de iluminación divina, destacando el altar como el foco espiritual de la iglesia y añadiendo una atmósfera solemne y contemplativa al espacio. </div>';
panorama.add(infospot9)

//agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);