//  ------------ Opacidad del encabezado al hacer scroll -------------------

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 100) { // Cambia 100 al valor que desees
        header.style.opacity = "0.0"; // Cambia la opacidad al valor deseado
    } else {
        header.style.opacity = "1";
    }
});

//  --------------- Recarga Boton Conocer mas - Nosotros -------------------
let displayInfo = document.querySelector('.contenedor-recarga');

let fourCards = document.querySelector('.boton-conocer');
fourCards.addEventListener('click', e => {
    e.preventDefault();

    displayInfo.innerHTML = `
    // <div class="contenedor_nosotros">
    //     <div class="contenedor-titulo-nosotros">
    //         <div class="titulo-n">
    //             <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
    //         </div>
    //         <div class="subtitulo-nosotros">
    //             <div class="subtitulo-n">
    //                 <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,
    //                     sitios web estratégicos y always-on dedicados.</h4>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="contenedor-mivi">
    //         <div class="mision">
    //             <div class="titulo-mision">
    //                 <h2>Misión</h2>
    //             </div>
    //             <div class="texto-mision">
    //                 <p>
    //                     Guías locales nació en el año 2017 con la iniciativa de ayudar a los comercios con las ubicaciones, y el posicionamiento en Google maps.
    //                     El objetivo se superó con éxito, ayudando a más de 8000 comercios en todo el país.
    //                     Es así que a pedido de nuestros clientes decidimos ayudar también con respecto a las redes sociales, manejando los mismos valores hacemos nuestro trabajo con el corazón, nuestro lema es formar parte de tu negocio, tu equipo de marketing y no solo una empresa que te maneja las redes.
    //                 </p>
    //             </div>
    //         </div>
    //         <div class="vision">
    //             <div class="titulo-vision">
    //                 <h2>Visión</h2>
    //             </div>
    //             <div class="texto-vision">
    //                 <p>
    //                     Nuestra visión es ser la empresa líder en marketing a Nivel nacional. Brindando un marketing integral a todas las empresas que deseen que nos sumemos a su equipo.
    //                     Brindando un servicio con la mejor calidad posible y poniendo como prioridad las relaciones internas y externas.
    //                     VALORES: nos inspira la transparencia, la alegría del trabajo, mejora continua, trabajo hacia la excelencia y la de construir relaciones duraderas.
    //                 </p>
    //             <div>
    //         </div>
    //     </div>
    // </div>
    `;
    volver();//funcion para el boton volver.
});

//  --------------- Recarga nav-header obteniendo el ID segun el contenido -------------------
let holaInfo = document.querySelector('.contenedor-recarga');

// Agrega un controlador de clic a todos los enlaces con la clase "section-link"
document.querySelectorAll('.section-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        // Obtiene el ID del enlace y carga el contenido correspondiente
        let targetId = link.getAttribute('href').substring(1);
        cargarContenido(targetId);
    });
});

// Función para cargar el contenido en el contenedor
function cargarContenido(targetId) {
    // Implementa la lógica para cargar el contenido según el ID
    // Se Puedes utilizar un objeto o un switch para determinar qué contenido cargar

    // Ejemplo de contenido para la sección "Nosotros"
    if (targetId === 'nosotros') {
        holaInfo.innerHTML =`
        // <div class="contenedor_nosotros">
        //     <div class="contenedor-titulo-nosotros">
        //         <div class="titulo-n">
        //             <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
        //         </div>
        //         <div class="subtitulo-nosotros">
        //             <div class="subtitulo-n">
        //                 <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,
        //                     sitios web estratégicos y always-on dedicados.</h4>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="contenedor-mivi">
        //         <div class="mision">
        //             <div class="titulo-mision">
        //                 <h2>Misión</h2>
        //             </div>
        //             <div class="texto-mision">
        //                 <p>
        //                     Guías locales nació en el año 2017 con la iniciativa de ayudar a los comercios con las ubicaciones, y el posicionamiento en Google maps.
        //                     El objetivo se superó con éxito, ayudando a más de 8000 comercios en todo el país.
        //                     Es así que a pedido de nuestros clientes decidimos ayudar también con respecto a las redes sociales, manejando los mismos valores hacemos nuestro trabajo con el corazón, nuestro lema es formar parte de tu negocio, tu equipo de marketing y no solo una empresa que te maneja las redes.
        //                 </p>
        //             </div>
        //         </div>
        //         <div class="vision">
        //             <div class="titulo-vision">
        //                 <h2>Visión</h2>
        //             </div>
        //             <div class="texto-vision">
        //                 <p>
        //                     Nuestra visión es ser la empresa líder en marketing a Nivel nacional. Brindando un marketing integral a todas las empresas que deseen que nos sumemos a su equipo.
        //                     Brindando un servicio con la mejor calidad posible y poniendo como prioridad las relaciones internas y externas.
        //                     VALORES: nos inspira la transparencia, la alegría del trabajo, mejora continua, trabajo hacia la excelencia y la de construir relaciones duraderas.
        //                 </p>
        //             <div>
        //         </div>
        //     </div>
        // </div>
        `;
        volver();//funcion para el boton volver.`;
    }

    // Agregar más casos sea necesario para otras secciones
}

// Función para volver al contenido inicial
function volver() {
    let btnVolver = document.querySelector('#volver');

    btnVolver.addEventListener('click', e => {
        e.preventDefault()
        location.href = 'http://127.0.0.1:';
    });
}

