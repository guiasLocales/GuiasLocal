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
        lightboxMedia.innerHTML = `<img src="${
          item.querySelector("img").src
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
    tarjetas.forEach(function (tarjeta) {
        var categoriasAtributo = tarjeta.getAttribute("data-categorias");
        if (categoriasAtributo) {
            var categorias = categoriasAtributo.split(" ");
            if (categorias.includes(categoria) || categoria === "todas") {
                tarjeta.classList.remove("hidden");
            } else {
                tarjeta.classList.add("hidden");
            }
        }
    });
}

  // Función para mostrar todas las tarjetas
  function mostrarTodasLasTarjetas() {
    tarjetas.forEach(function (tarjeta) {
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
    <div class="contenedor-titulo-nosotros">
        <div class="titulo-n">
            <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
        </div>
        <div class="subtitulo-n">
            <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,</h4>
            <h4> sitios web estratégicos y always-on dedicados.</h4>
        </div>
    </div>
    <div class="contenedor-misionvision">
        <div class="mision">
                <h2>Misión</h2>
                <p>
                    Guías locales nació en el año 2017 con la iniciativa de ayudar a los comercios con las ubicaciones, y el posicionamiento en Google maps.
                    El objetivo se superó con éxito, ayudando a más de 8000 comercios en todo el país.
                    Es así que a pedido de nuestros clientes decidimos ayudar también con respecto a las redes sociales, manejando los mismos valores hacemos nuestro trabajo con el corazón, nuestro lema es formar parte de tu negocio, tu equipo de marketing y no solo una empresa que te maneja las redes.
                </p>
        </div>
        <div class="vision">
                <h2>Visión</h2>
                <p>
                    Nuestra visión es ser la empresa líder en marketing a Nivel nacional. Brindando un marketing integral a todas las empresas que deseen que nos sumemos a su equipo.
                    Brindando un servicio con la mejor calidad posible y poniendo como prioridad las relaciones internas y externas.
                    VALORES: nos inspira la transparencia, la alegría del trabajo, mejora continua, trabajo hacia la excelencia y la de construir relaciones duraderas.
                </p>
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
        <div class="contenedor-titulo-nosotros">
            <div class="titulo-n">
                <h1><span class="fino">Hola! Somos </span><span class="bold">GUÍAS LOCALES</span></h1>
            </div>
            <div class="subtitulo-n">
                <h4>Somos una agencia de publicidad digital. Desarrollamos planes de comunicación,</h4>
                <h4> sitios web estratégicos y always-on dedicados.</h4>
            </div>
        </div>
        <div class="contenedor-misionvision">
            <div class="mision">
                    <h2>Misión</h2>
                    <p>
                        Guías locales nació en el año 2017 con la iniciativa de ayudar a los comercios con las ubicaciones, y el posicionamiento en Google maps.
                        El objetivo se superó con éxito, ayudando a más de 8000 comercios en todo el país.
                        Es así que a pedido de nuestros clientes decidimos ayudar también con respecto a las redes sociales, manejando los mismos valores hacemos nuestro trabajo con el corazón, nuestro lema es formar parte de tu negocio, tu equipo de marketing y no solo una empresa que te maneja las redes.
                    </p>
            </div>
            <div class="vision">
                    <h2>Visión</h2>
                    <p>
                        Nuestra visión es ser la empresa líder en marketing a Nivel nacional. Brindando un marketing integral a todas las empresas que deseen que nos sumemos a su equipo.
                        Brindando un servicio con la mejor calidad posible y poniendo como prioridad las relaciones internas y externas.
                        VALORES: nos inspira la transparencia, la alegría del trabajo, mejora continua, trabajo hacia la excelencia y la de construir relaciones duraderas.
                    </p>
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
  if (targetId === "contacto") {
    holaInfo.innerHTML = `
        <div id="contenedor-formulario">
            <form action="#" method="post" class="formulario">
                <h2 class="form-title">Formulario de Contacto</h2>
                <h4 class="form-subtitle">Envía tu consulta y en el día te estaremos respuesta</h4>
    
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" name="nombre" class="form-input" placeholder="Nombre" required>
    
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" id="apellido" name="apellido" class="form-input" placeholder="Apellido" required>
    
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="Email" required>
    
                <label for="consulta" class="form-label">Escribe tu consulta</label>
                <textarea id="consulta" name="consulta" class="form-textarea" rows="4" placeholder="Escribe tu consulta" required></textarea>
    
                <input type="submit" value="Enviar" class="form-submit">
            </form>
        </div>
        `;
  }

  // Agregar más casos sea necesario para otras secciones
}

// Función para volver al contenido inicial
function volver() {
  let btnVolver = document.querySelector("#volver");

  btnVolver.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "http://127.0.0.1:";
  });
}
