//  ------------ Opacidad del encabezado al hacer scroll -------------------

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 100) {
    // Cambia 100 al valor que desees
    header.style.opacity = "0.0";
    header.style.hidden; // Cambia la opacidad al valor deseado
  } else {
    header.style.opacity = "1";
  }
});
//  ------------ Opacidad del encabezado al hacer scroll -------------------
//  --------------- Boton Whatsapp-------------------

function openWhatsApp() {
  const whatsappURL =
    "https://api.whatsapp.com/send/?phone=5493513082238&text=Hola+Leandro+me+interesar%C3%ADa+saber+m%C3%A1s+sobre+Gu%C3%ADas+locales&type=phone_number&app_absent=0";
  window.open(whatsappURL, "_blank");
}

//  --------------- Boton Whatsapp-------------------

// ---------------------------- Nuestro Portafolio ------------------------
document.addEventListener("DOMContentLoaded", function () {
  var tarjetas = document.querySelectorAll(".tarjeta");
  var indexCounter = 0;

  // Asocia un evento de clic a cada botón
  document
    .getElementById("btn-analisis-de-datos")
    .addEventListener("click", function () {
      filtrarTarjetas("analisis-de-datos");
    });
  document
    .getElementById("btn-business-manager")
    .addEventListener("click", function () {
      filtrarTarjetas("business-manager");
    });
  document
    .getElementById("btn-fotografia-360")
    .addEventListener("click", function () {
      filtrarTarjetas("fotografia-360");
    });
  document
    .getElementById("btn-redes-sociales")
    .addEventListener("click", function () {
      filtrarTarjetas("redes-sociales");
    });
  document.getElementById("btn-todas").addEventListener("click", function () {
    mostrarTodasLasTarjetas();
  });

  // Función para mostrar solo las tarjetas de una categoría
  function filtrarTarjetas(categoria) {
    indexCounter = 0;
    tarjetas.forEach(function (tarjeta, index) {
      var categoriasAtributo = tarjeta.getAttribute("data-categorias");
      if (categoriasAtributo) {
        var categorias = categoriasAtributo.split(" ");
        if (categorias.includes(categoria) || categoria === "todas") {
          tarjeta.classList.remove("hidden");
        } else {
          tarjeta.classList.add("hidden");
        }
      }
      tarjeta.style.order = index + 1;
    });
  }

  // Función para mostrar todas las tarjetas
  function mostrarTodasLasTarjetas() {
    tarjetas.forEach(function (tarjeta, index) {
      tarjeta.style.order = index + 1;
      tarjeta.style.display = "block";
      tarjeta.classList.remove("hidden");
    });
  }
});

// ---------------------------- Nuestro Portafolio ------------------------

//  --------------- Recarga Boton Conocer mas - Nosotros -------------------
let displayInfo = document.querySelector(".contenedor-recarga");

let fourCards = document.querySelector(".boton-conocer");
fourCards.addEventListener("click", (e) => {
  e.preventDefault();

  displayInfo.innerHTML = `
    <div class="contenedor_nosotros">
    
    <i class="fas fa-arrow-left" id='volver'></i>
    <div class="contenedor-titulo-nosotros">
            <div class="titulo-n">
                <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
            </div>
            <div class="subtitulo-n">
                <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,</h4>
                <h4> sitios web estratégicos y analisis de datos.</h4>
            </div>
        </div>
    <div class="contenedor-secciones">
    <!-- Sección 1: Nuestra Historia -->
    <div class="seccion-historia">
        <img src="/img/nosotros/GUIAS-LOCALES-WEB.png" alt="Guias locales web">
        <div class="texto-derecha">
            <h3>Nuestra Misión</h3>
            <p>En Guías Locales, nos enorgullece haber nacido en 2017 con la misión de ayudar a los comercios y empresas a mejorar sus ubicaciones y posicionamiento en Google Maps. Desde entonces, hemos logrado superar con éxito nuestros objetivos, brindando asistencia a más de 8000 comercios en todo el país. Sin embargo, nuestra historia no termina ahí. Escuchando las necesidades y deseos de nuestros valiosos clientes, decidimos expandir nuestros servicios para incluir también el apoyo en un marketing integral. Creemos firmemente en la importancia de adaptarnos y evolucionar junto con el mundo digital en constante cambio.</p>
        </div>
    </div>

    <!-- Sección 2: Nuestra Misión -->
    <div class="seccion-mision">
        <div class="texto-izquierda">
            <h3>Nuestra Visión</h3>
            <p>Nuestra visión es convertirnos en la empresa líder en marketing, ofreciendo soluciones integrales para todas las empresas que deseen contar con nuestro equipo. Nos esforzamos por brindar un servicio de la más alta calidad, colocando las relaciones internas y externas como nuestra máxima prioridad. En nuestro camino hacia el liderazgo, nos comprometemos a ser el socio confiable que necesitas para impulsar tu negocio. Nos enfocamos en comprender tus necesidades únicas y colaborar estrechamente contigo, formando parte de tu equipo.</p>
        </div>
        <img src="/img/nosotros/Asset-24x-1536x1005.png" alt="Imagen 2">
    </div>

    <!-- Sección 3: Nuestros Valores -->
    <div class="seccion-valores">
          <img src="/img/nosotros/Asset-14x-2-2041x2048.png" alt="Imagen 3">
          <div class="texto-derecha">
              <h3>Nuestros Valores</h3>
              <p>Lo que nos distingue es nuestra pasión por lo que hacemos. Guiados por nuestros valores fundamentales, nos entregamos de corazón en cada proyecto. Trabajamos con empeño para lograr resultados excepcionales y, lo más importante, formamos parte integral de tu negocio. Nuestro lema resume nuestra filosofía: ‘Formar parte de tu negocio’. Nos esforzamos por establecer una relación sólida y duradera contigo, comprendiendo tus necesidades y objetivos, para brindarte soluciones personalizadas y efectivas. Nos inspira la transparencia, la alegría en el trabajo y la mejora continua.</p>
          </div>
      </div>   
    </div>
    <div class="contenedor-somos">
        <div class="titulo-somos">
            <h1><span class="fino">Somos una Agencia de </span><span class="bold">Marketing 360°</span></h1>
        </div>
        <div class="subtitulo-somos">
            <p>Analizamos los datos constantemente para tomar decisiones en tiempo real y mejorar el retorno de tu inversión. Creemos que cada cliente tiene unas necesidades y unos ritmos, nuestro trabajo es generar el máximo retorno dentro de sus tiempos y expectativas.</p>
        </div>
        <div class="tarjetas-somos">
            <div class="tarjetas-s">
                <h3>Nos enfocamos en datos</h3>
                <p>Aceleramos el crecimiento de tu marca gracias al análisis de datos. Lanzamos hipótesis, realizamos test A/B y tomamos decisiones en base a la analítica y los resultados.</p>
            </div>
            <div class="tarjetas-s">
                <h3>Somos ágiles</h3>
                <p>Tomamos decisiones eficaces en base al análisis de resultados y en torno a una estrategia. Optimizamos el proceso constantemente para mejorar los resultados.</p>
            </div>
            <div class="tarjetas-s">
                <h3>Experiencia en tu sector</h3>
                <p>Desde el sector industrial al de las SaaS, pasando por alimentación, turismo o marketplaces de gran consumo. Es probable que tengamos experiencia generando negocio en tu sector.</p>
            </div>
            <div class="tarjetas-s">
                <h3>Las personas en Guías Locales</h3>
                <p>Expertos en Marketing Digital, no nos conformamos solo con buenos resultados: buscamos la excelencia para lograr los objetivos de nuestros clientes.</p>
            </div>
            <div class="tarjetas-s">
                <h3>Trabajado en crecimiento</h3>
                <p>Hemos mejorado el posicionamiento y aumentado los beneficios de grandes marcas como así también hemos hecho crecer a pequeñas y medianas empresas.</p>
            </div>
            <div class="tarjetas-s">
                <h3>Generar Negocios</h3>
                <p>Queremos aumentar tus conversiones, y hacer crecer tu negocio. Para ello, trabajamos con rigor científico. Analizamos los datos constantemente para tomar decisiones en tiempo real y mejorar el retorno de tu inversión.</p>
            </div>
        </div>
    </div>
    <div class="contenedor-resumen">
        <div class="tarjeta-resumen">
            <div class="texto-principal">+ DE 8M</div>
            <div class="texto-secundario"><span class="flecha">&#x2191;</span> COMERCIOS </div>
        </div>
        <div class="tarjeta-resumen">
            <div class="texto-principal">+ DE 60M</div>
            <div class="texto-secundario"><span class="flecha">&#x2191;</span> FOTOGRAFÍAS</div>
        </div>
        <div class="tarjeta-resumen">
            <div class="texto-principal">+ DE 2M</div>
            <div class="texto-secundario"><span class="flecha">&#x2191;</span> VIDEOS 360° Google View</div>
        </div>
        <div class="tarjeta-resumen">
            <div class="texto-principal">7 AÑOS</div>
            <div class="texto-secundario"><span class="flecha">&#x2191;</span> DE EXPERIENCIA</div>
        </div>
    </div>
</div>
    `;
  volver(); //funcion para el boton volver.
});

//  --------------- Recarga nav-header obteniendo el ID segun el contenido -------------------
let holaInfo = document.querySelector(".contenedor-recarga");

// Agrega un controlador de clic a todos los enlaces con la clase "section-link"
document.querySelectorAll(".section-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Obtiene el ID del enlace y carga el contenido correspondiente
    let targetId = link.getAttribute("href").substring(1);
    cargarContenido(targetId);
  });
});

// Función para cargar el contenido en el contenedor
function cargarContenido(targetId) {
  // Implementa la lógica para cargar el contenido según el ID
  // Se Puedes utilizar un objeto o un switch para determinar qué contenido cargar

  // Ejemplo de contenido para la sección "Nosotros"
  if (targetId === "nosotros") {
    holaInfo.innerHTML = `
        <div class="contenedor_nosotros">
        <i class="fas fa-arrow-left" id='volver'></i>
        <div class="contenedor-titulo-nosotros">
            <div class="titulo-n">
                <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
            </div>
            <div class="subtitulo-n">
                <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,</h4>
                <h4> sitios web estratégicos y analisis de datos.</h4>
            </div>
        </div>
        <div class="contenedor-secciones">
        <!-- Sección 1: Nuestra Historia -->
        <div class="seccion-historia">
            <img src="/img/nosotros/GUIAS-LOCALES-WEB.png" alt="Guias locales web">
            <div class="texto-derecha">
                <h3>Nuestra Misión</h3>
                <p>En Guías Locales, nos enorgullece haber nacido en 2017 con la misión de ayudar a los comercios y empresas a mejorar sus ubicaciones y posicionamiento en Google Maps. Desde entonces, hemos logrado superar con éxito nuestros objetivos, brindando asistencia a más de 8000 comercios en todo el país. Sin embargo, nuestra historia no termina ahí. Escuchando las necesidades y deseos de nuestros valiosos clientes, decidimos expandir nuestros servicios para incluir también el apoyo en un marketing integral. Creemos firmemente en la importancia de adaptarnos y evolucionar junto con el mundo digital en constante cambio.</p>
            </div>
        </div>
    
        <!-- Sección 2: Nuestra Misión -->
        <div class="seccion-mision">
            <div class="texto-izquierda">
                <h3>Nuestra Visión</h3>
                <p>Nuestra visión es convertirnos en la empresa líder en marketing, ofreciendo soluciones integrales para todas las empresas que deseen contar con nuestro equipo. Nos esforzamos por brindar un servicio de la más alta calidad, colocando las relaciones internas y externas como nuestra máxima prioridad. En nuestro camino hacia el liderazgo, nos comprometemos a ser el socio confiable que necesitas para impulsar tu negocio. Nos enfocamos en comprender tus necesidades únicas y colaborar estrechamente contigo, formando parte de tu equipo.</p>
            </div>
            <img src="/img/nosotros/Asset-24x-1536x1005.png" alt="Imagen 2">
        </div>
    
        <!-- Sección 3: Nuestros Valores -->
        <div class="seccion-valores">
            <img src="/img/nosotros/Asset-14x-2-2041x2048.png" alt="Imagen 3">
            <div class="texto-derecha">
                <h3>Nuestros Valores</h3>
                <p>Lo que nos distingue es nuestra pasión por lo que hacemos. Guiados por nuestros valores fundamentales, nos entregamos de corazón en cada proyecto. Trabajamos con empeño para lograr resultados excepcionales y, lo más importante, formamos parte integral de tu negocio. Nuestro lema resume nuestra filosofía: ‘Formar parte de tu negocio’. Nos esforzamos por establecer una relación sólida y duradera contigo, comprendiendo tus necesidades y objetivos, para brindarte soluciones personalizadas y efectivas. Nos inspira la transparencia, la alegría en el trabajo y la mejora continua.</p>
            </div>
          </div>   
        </div>
        <div class="contenedor-somos">
            <div class="titulo-somos">
                <h1><span class="fino">Somos una Agencia de </span><span class="bold">Marketing 360°</span></h1>
            </div>
            <div class="subtitulo-somos">
                <p>Analizamos los datos constantemente para tomar decisiones en tiempo real y mejorar el retorno de tu inversión. Creemos que cada cliente tiene unas necesidades y unos ritmos, nuestro trabajo es generar el máximo retorno dentro de sus tiempos y expectativas.</p>
            </div>
            <div class="tarjetas-somos">
                <div class="tarjetas-s">
                    <h3>Nos enfocamos en datos</h3>
                    <p>Aceleramos el crecimiento de tu marca gracias al análisis de datos. Lanzamos hipótesis, realizamos test A/B y tomamos decisiones en base a la analítica y los resultados.</p>
                </div>
                <div class="tarjetas-s">
                    <h3>Somos ágiles</h3>
                    <p>Tomamos decisiones eficaces en base al análisis de resultados y en torno a una estrategia. Optimizamos el proceso constantemente para mejorar los resultados.</p>
                </div>
                <div class="tarjetas-s">
                    <h3>Experiencia en tu sector</h3>
                    <p>Desde el sector industrial al de las SaaS, pasando por alimentación, turismo o marketplaces de gran consumo. Es probable que tengamos experiencia generando negocio en tu sector.</p>
                </div>
                <div class="tarjetas-s">
                    <h3>Las personas en Guías Locales</h3>
                    <p>Expertos en Marketing Digital, no nos conformamos solo con buenos resultados: buscamos la excelencia para lograr los objetivos de nuestros clientes.</p>
                </div>
                <div class="tarjetas-s">
                    <h3>Trabajado en crecimiento</h3>
                    <p>Hemos mejorado el posicionamiento y aumentado los beneficios de grandes marcas como así también hemos hecho crecer a pequeñas y medianas empresas.</p>
                </div>
                <div class="tarjetas-s">
                    <h3>Generar Negocios</h3>
                    <p>Queremos aumentar tus conversiones, y hacer crecer tu negocio. Para ello, trabajamos con rigor científico. Analizamos los datos constantemente para tomar decisiones en tiempo real y mejorar el retorno de tu inversión.</p>
                </div>
            </div>
        </div>
        <div class="contenedor-resumen">
            <div class="tarjeta-resumen">
                <div class="texto-principal">+ DE 8M</div>
                <div class="texto-secundario"><span class="flecha">&#x2191;</span> COMERCIOS </div>
            </div>
            <div class="tarjeta-resumen">
                <div class="texto-principal">+ DE 60M</div>
                <div class="texto-secundario"><span class="flecha">&#x2191;</span> FOTOGRAFÍAS</div>
            </div>
            <div class="tarjeta-resumen">
                <div class="texto-principal">+ DE 2M</div>
                <div class="texto-secundario"><span class="flecha">&#x2191;</span> VIDEOS 360° Google View</div>
            </div>
            <div class="tarjeta-resumen">
                <div class="texto-principal">7 AÑOS</div>
                <div class="texto-secundario"><span class="flecha">&#x2191;</span> DE EXPERIENCIA</div>
            </div>
        </div>
    </div>
        `;
    volver(); //funcion para el boton volver.`;
  }
  if (targetId === "gb") {
    holaInfo.innerHTML = `
    <i class="fas fa-arrow-left" id='volver'></i>
    <div class="contenedor-gb">
      <h1><span class="bold">Google Business</span></h1>
        <!-- Sección 1: CATALOGO DE PRODUCTOS - PUBLICACIONES DIARIAS  -->
        <div class="seccion-cp-pd">
            <img src="/img/gmb/1 y 2.png" alt="Guias locales web">
            <div class="texto-derecha">
                <h3>CATALOGO DE PRODUCTOS</h3>
                <p>Armamos el  catalogo de productos que mejor se adapte a tu perfil de negocio, para posicionar tu negocio orgánicamente.
                </p>
                <h3>PUBLICACIONES DIARIAS</h3>
                <p>Replicamos en tu perfil de negocio tus posteos semanales de las redes sociales más utilizadas.                     
                </p>
            </div>
        </div>
    
        <!-- Sección 2: CONTACTO - GESTION DE RESEÑAS -->
        <div class="seccion-c-gr">
            <div class="texto-izquierda">
                <h3>CONTACTO</h3>
                <p>Mantenemos tu perfil al día, incluida la actualizacion de los festivos.
                   Agregamos un link de WhatsApp en cada una de las ubicaciones para mejorar el contacto con tus clientes y conectamos cada producto con el. 
                </p>
                <h3>GESTION DE RESEÑAS</h3>
                <p>Gestionamos tus reseñas y ayudamos a que obtengas mas reseñas mediante acciones que van adecuadas a tu negocio como un QR, o link para Reseñas, etc..
                </p>
            </div>
            <img src="/img/gmb/4 y 5.png" alt="Imagen 2">
        </div>
    
        <!-- Sección 3: UBICACION OPTIMIZADA - ESTADISTICAS MENSUALES  -->
        <div class="seccion-uo-em">
            <img src="/img/gmb/5 y 6.png" alt="Imagen 3">
            <div class="texto-derecha">
                <h3>UBICACION OPTIMIZADA</h3>
                <p>Mejoramos visualmente la ubicación con fotos de portada atractiva y en caso de una cambio relevante de tu negocio mantenemos las fotos actualizadas.</p>
                <h3>ESTADISTICAS MENSUALES</h3>
                <p>Resumimos las estadísticas de todas tus ubicaciones para que sean mucho mas sencillas de ver y asi poder tomar mejores decisiones en el futuro. En ella tomamos los datos mas 
                    destacados de cada ubicación:
                    <ul>
                    <li>Alcance.</li>
                    <li>Top palabras claves.</li>
                    <li>Dispositivos Utilizados.</li>
                    <li>Comparativa de interacciones.</li>
                    <li>Gestion de reseñas.</li>
                    <li>Puntos fuertes y débiles.</li>
                    <li>Tableros Personalizados.</li>
                    </ul>  
                </p>
            </div>
        </div>
        
        <!-- Sección 4: OPCIONAL  -->
        <div class="seccion-op">
            <div class="texto-izquierda">
                <h3>OPCIONAL</h3>
                <p>Gestión presupuesto publicitario - anuncios smart.</p>
                <p>Gestionamos tus campañas publicitarias SMART.</p> 
                <p>Que es un tipo de campaña sobre la ubicación de 
                    Google Maps.</p> 
                    <p>Incluye: </p> 
                    <ul>
                        <li>Estudio de Mercado.</li>
                        <li>Estudio de palabras claves.</li>
                        <li>Optimización de campñas.</li>
                        <li>Comparativa de interacciones.</li>
                        <li>Analisis de Datos.</li>
                    </ul>       
                
            </div>
            <img src="/img/gmb/opcional.png" alt="Imagen 3">
        </div>  
    </div>
    `;

    volver(); //funcion para el boton volver.`;
  }

  if (targetId === "contacto") {
    // holaInfo.innerHTML = `
    //     <div id="contenedor-formulario">
    //     <i class="fas fa-arrow-left" id='volver'></i>
    //         <form action="#" method="post" class="formulario">
    //             <h2 class="form-title">Formulario de Contacto</h2>
    //             <h4 class="form-subtitle">Envía tu consulta y en el día te estaremos respuesta</h4>

    //             <label for="nombre" class="form-label">Nombre</label>
    //             <input type="text" id="nombre" name="nombre" class="form-input" placeholder="Nombre" required>

    //             <label for="apellido" class="form-label">Apellido</label>
    //             <input type="text" id="apellido" name="apellido" class="form-input" placeholder="Apellido" required>

    //             <label for="email" class="form-label">Email</label>
    //             <input type="email" id="email" name="email" class="form-input" placeholder="Email" required>

    //             <label for="consulta" class="form-label">Escribe tu consulta</label>
    //             <textarea id="consulta" name="consulta" class="form-textarea" rows="4" placeholder="Escribe tu consulta" required></textarea>

    //             <input type="submit" value="Enviar" class="form-submit">
    //         </form>
    //     </div>
    //     `;
    //     volver(); //funcion para el boton volver.`;
    // ---------------- DESPLAZAMIENTO CONTACTO ----------------
    var targetElement = document.getElementById(targetId);
    var targetOffset = targetElement.offsetTop;
    var currentPosition = window.scrollY;
    var distance = targetOffset - currentPosition;
    var startTime = null;

    function smoothScroll(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var progress = timestamp - startTime;
      var easeInOutQuad = progress < duration ? progress / duration : 1;

      window.scrollTo(0, currentPosition + easeInOutQuad * distance);

      if (progress < duration) {
        requestAnimationFrame(smoothScroll);
      }
    }

    var duration = 1000; // Duración del desplazamiento en milisegundos
    requestAnimationFrame(smoothScroll);

  }

  // Agregar más casos sea necesario para otras secciones
}

// Función para volver al contenido inicial
function volver() {
  let btnVolver = document.querySelector("#volver");

  btnVolver.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index.html";
  });
}

//  --------------- carrusel -------------------
document.addEventListener("DOMContentLoaded", function () {
  const sliderItems = document.querySelectorAll(".slider-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDescription = document.getElementById("lightbox-description");
  const lightboxMedia = document.getElementById("lightbox-media");
  const closeBtn = document.getElementById("closeBtn");

  sliderItems.forEach((item) => {
    item.addEventListener("click", function () {
      const type = item.getAttribute("data-type");
      const title = item.getAttribute("data-title");
      const description = item.getAttribute("data-description");
      const mediaContent = item.innerHTML;

      // lightboxTitle.innerHTML = title;
      // lightboxDescription.innerHTML = description;

      if (type === "video") {
        lightboxMedia.innerHTML = mediaContent;
        // Pausar el video si está reproduciéndose (para evitar duplicar la reproducción)
        const video = lightboxMedia.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0; // Reiniciar la reproducción al abrir el lightbox
        }
      } else {
        lightboxMedia.innerHTML = `<img src="${item.querySelector("img").src
          }" alt="${title}">`;
      }

      lightbox.style.display = "block";
    });
  });

  function closeLightbox() {
    console.log("Cerrando lightbox");
    lightbox.style.display = "none";
    // Pausar el video si está reproduciéndose
    const video = lightboxMedia.querySelector("video");
    if (video) {
      video.pause();
    }
  }
  // Agrega un evento clic al botón de cierre
  closeBtn.addEventListener("click", function () {
    closeLightbox();
  });

  window.closeLightbox = closeLightbox;

  lightbox.addEventListener("click", function () {
    console.log("Haciendo clic en el lightbox");
    // Cerrar lightbox al hacer clic fuera del contenido
    closeLightbox();
  });

  lightboxMedia.addEventListener("click", function (event) {
    // Detener la propagación del clic dentro del lightboxMedia para evitar que cierre el lightbox
    event.stopPropagation();
  });

  // Reproducir el video en silencio al pasar el cursor
  sliderItems.forEach((item) => {
    const video = item.querySelector("video");
    if (video) {
      item.addEventListener("mouseenter", function () {
        video.volume = 0; // Establecer volumen en silencio
        video.play();
      });

      item.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0; // Reiniciar la reproducción al salir del cursor
      });
    }
  });
});

//  --------------- carrusel -------------------

