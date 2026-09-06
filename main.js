const productos = [
  {
    id: 1,
    nombre: "Sofá Patagonia",
    categoria: "livings",
    precio: 120000,
    imagen: "./assets/Sofá Patagonia.png",
    imagendetalle: "./assets/fotos_prod/sillon_patagonia_prod.jpg",
    descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    especificaciones: {
      medidas: "220 × 90 × 80 cm",
      estructura: "Madera de eucalipto certificada FSC",
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables"
    },
    oferta: true,
    nuevo: false
  },
  {
    id: 2,
    nombre: "Mesa Comedor Pampa",
    categoria: "comedor",
    precio: 85000,
    imagen: "./assets/Mesa Comedor Pampa.png",
    imagendetalle: "./assets/fotos_prod/comedor_pampa_prod.jpg",
    descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    especificaciones: {
      medidas: "160-240 × 90 × 75 cm",
      materiales: "Roble macizo FSC mecanismo alemán",
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central"
    },
    oferta: false,
    nuevo: true
  },
  {
    id: 3,
    nombre: "Escritorio Costa",
    categoria: "estudio",
    precio: 65000,
    imagen: "./assets/Escritorio Costa.png",
    imagendetalle: "./assets/fotos_prod/escritorio_costa_prod.jpg",
    descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    especificaciones: {
      medidas: "120 × 60 × 75 cm",
      materiales: "Bambú laminado, herrajes ocultos",
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado"
    },
    oferta: false,
    nuevo: true
  },
  {
    id: 4,
    nombre: "Biblioteca Recoleta",
    categoria: "livings",
    precio: 95000,
    imagen: "./assets/Biblioteca Recoleta.png",
    imagendetalle: "./assets/fotos_prod/biblio_recoleta_prod.jpg",
    descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    especificaciones: {
      medidas: "100 × 35 × 200 cm",
      materiales: "Estructura de acero, estantes de roble",
      acabado: "Laca mate ecológica",
      capacidad: "45kg por estante",
      modulares: "5 estantes ajustables"
    },
    oferta: true,
    nuevo: false
  },
  {
    id: 5,
    nombre: "Sillas Córdoba",
    categoria: "comedor",
    precio: 32000,
    imagen: "./assets/Sillas Córdoba.png",
    imagendetalle: "./assets/fotos_prod/sillas_cordoba_prod.jpg",
    descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    especificaciones: {
      medidas: "45 × 52 × 80 cm (cada una)",
      materiales: "Contrachapado nogal, tubo de acero",
      acabado: "Laca mate, pintura epoxi",
      apilable: "Hasta 6 sillas",
      incluye: "Set de 4 sillas"
    },
    oferta: false,
    nuevo: false
  },
  {
    id: 6,
    nombre: "Aparador Uspallata",
    categoria: "livings",
    precio: 110000,
    imagen: "./assets/Aparador Uspallata.png",
    imagendetalle: "./assets/fotos_prod/aparador_uspallata_prod.jpg",
    descripcion: "Aparador de dos puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    especificaciones: {
      medidas: "180 × 45 × 75 cm",
      materiales: "Nogal macizo FSC, herrajes de latón",
      acabado: "Aceite natural ecológico",
      peso: "68kg",
      capacidad: "6 compartimientos interiores"
    },
    oferta: false,
    nuevo: true
  },
  {
    id: 7,
    nombre: "Mesa de Noche Aconcagua",
    categoria: "livings",
    precio: 42000,
    imagen: "./assets/Mesa de Noche Aconcagua.png",
    imagendetalle: "./assets/fotos_prod/mesa_nocheaconcagua_prod.jpg",
    descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    especificaciones: {
      medidas: "45 × 35 × 60 cm",
      materiales: "Roble macizo FSC, herrajes soft-close",
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave"
    },
    oferta: true,
    nuevo: false
  },
  {
    id: 8,
    nombre: "Mesa de Centro Araucaria",
    categoria: "livings",
    precio: 58000,
    imagen: "./assets/Mesa de Centro Araucaria.png",
    imagendetalle: "./assets/fotos_prod/mesa_centro_prod.jpg",
    descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    especificaciones: {
      medidas: "90 × 90 × 45 cm",
      materiales: "Sobre de vidrio templado 19mm, patas de nogal",
      acabado: "Aceite natural en madera",
      peso: "42kg",
      cargamaxima: "25kg distribuidos"
    },
    oferta: false,
    nuevo: true
  },
  {
    id: 9,
    nombre: "Butaca Mendoza",
    categoria: "estudio",
    precio: 125000,
    imagen: "./assets/Butaca Mendoza.png",
    imagendetalle: "./assets/fotos_prod/butaca_mendoza_prod.jpg",
    descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    especificaciones: {
      medidas: "80 × 75 × 85 cm",
      materiales: "Guatambú macizo, tela bouclé",
      acabado: "Cuero anilina premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma de alta densidad"
    },
    oferta: false,
    nuevo: false
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    categoria: "livings",
    precio: 98000,
    imagen: "./assets/Sillón Copacabana.png",
    imagendetalle: "./assets/fotos_prod/sillon_copacabana_prod.jpg",
    descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    especificaciones: {
      medidas: "90 × 85 × 95 cm",
      materiales: "Cuero curtido vegetal, acero pintado",
      acabado: "Cera vegetal, tapizado premium",
      cargamaxima: "Soporta hasta 150kg",
      garantia: "10 años en estructura"
    },
    oferta: true,
    nuevo: true
  },
  {
    id: 11,
    nombre: "Silla de Trabajo Belgrano",
    categoria: "estudio",
    precio: 88000,
    imagen: "./assets/Silla de Trabajo Belgrano.png",
    imagendetalle: "./assets/fotos_prod/silla_belgrano_prod.jpg",
    descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    especificaciones: {
      medidas: "60 × 60 × 90-100 cm",
      materiales: "Malla técnica, tejido reciclado",
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335"
    },
    oferta: true,
    nuevo: true
  }
];

/* =========================================================
   FUNCIONES GLOBALES DEL CARRITO (Accesibles en todas las páginas)
========================================================= */
let carrito = JSON.parse(localStorage.getItem("carritoJota")) || [];

function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(precio);
}

function guardarCarrito() {
  localStorage.setItem("carritoJota", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const productoExistente = carrito.find((item) => item.id === id);
  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: producto.id,
      cantidad: 1
    });
  }

  guardarCarrito();
  renderizarCarrito();
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find((producto) => producto.id === id);
  if (!item) return;

  item.cantidad += cambio;
  if (item.cantidad <= 0) {
    carrito = carrito.filter((producto) => producto.id !== id);
  }

  guardarCarrito();
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  guardarCarrito();
  renderizarCarrito();
}

function renderizarCarrito() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  if (carrito.length === 0) {
    cartItems.innerHTML = `
      <div class="carrito-vacio">
        <span class="carrito-vacio__icon">🛒</span>
        <h3>Tu carrito está vacío</h3>
        <p>Agregá tus muebles favoritos para comenzar.</p>
      </div>
    `;

    if (cartCount) cartCount.textContent = "0";
    if (cartTotal) cartTotal.textContent = formatearPrecio(0);
    return;
  }

  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach((item) => {
    const producto = productos.find((p) => p.id === item.id);
    if (!producto) return;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;
    cantidadTotal += item.cantidad;

    const cartItem = document.createElement("article");
    cartItem.className = "carrito-item";
    cartItem.innerHTML = `
      <img
        src="${producto.imagen}"
        alt="${producto.nombre}"
        class="carrito-item__image"
      />
      <div class="carrito-item__content">
        <h4>${producto.nombre}</h4>
        <p class="carrito-item__price">${formatearPrecio(producto.precio)}</p>
        <div class="carrito-item__bottom">
          <div class="cantidad-control">
            <button type="button" data-action="menos" data-id="${producto.id}" aria-label="Disminuir cantidad">−</button>
            <span>${item.cantidad}</span>
            <button type="button" data-action="mas" data-id="${producto.id}" aria-label="Aumentar cantidad">+</button>
          </div>
          <button type="button" class="carrito-item__delete" data-action="eliminar" data-id="${producto.id}">
            Eliminar
          </button>
        </div>
      </div>
    `;
    cartItems.appendChild(cartItem);
  });

  if (cartCount) cartCount.textContent = cantidadTotal;
  if (cartTotal) cartTotal.textContent = formatearPrecio(total);

  cartItems.querySelectorAll("[data-action]").forEach((boton) => {
    const id = Number(boton.dataset.id);
    const action = boton.dataset.action;

    if (action === "mas") {
      boton.addEventListener("click", () => cambiarCantidad(id, 1));
    }
    if (action === "menos") {
      boton.addEventListener("click", () => cambiarCantidad(id, -1));
    }
    if (action === "eliminar") {
      boton.addEventListener("click", () => eliminarDelCarrito(id));
    }
  });
}

/* =========================================================
   RENDERIZADO DEL CATÁLOGO (Ámbito global)
========================================================= */
function renderizarProductos(lista) {
  const contenedorProductos = document.getElementById("catalogoProducts");
  if (!contenedorProductos) return;

  contenedorProductos.innerHTML = "";

  if (lista.length === 0) {
    contenedorProductos.innerHTML = `
      <div class="catalogo__empty" style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <p>No encontramos productos en esta categoría.</p>
      </div>
    `;
    return;
  }

  lista.forEach((producto) => {
    const card = document.createElement("article");
    card.className = "catalogo__card";

    const etiquetaOferta = producto.oferta
      ? `<span class="producto-badge producto-badge--oferta">OFERTA</span>`
      : "";

    const etiquetaNuevo = producto.nuevo
      ? `<span class="producto-badge producto-badge--nuevo">NUEVO</span>`
      : "";

    card.innerHTML = `
      <a href="./producto-detalle.html?id=${producto.id}" class="catalogo__circle-link">
        <div class="catalogo__circle">
          <div class="producto-badges">
            ${etiquetaOferta}
            ${etiquetaNuevo}
          </div>
          <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
            loading="lazy"
          />
        </div>
      </a>

      <div class="catalogo__info">
        <h3 class="catalogo__name">
          <a href="./producto-detalle.html?id=${producto.id}" class="catalogo__name-link">
            ${producto.nombre}
          </a>
        </h3>

        <p class="catalogo__price">
          ${formatearPrecio(producto.precio)}
        </p>

        <button
          class="catalogo__add"
          type="button"
          data-id="${producto.id}"
        >
          Agregar al carrito
        </button>
      </div>
    `;

    contenedorProductos.appendChild(card);
  });

  contenedorProductos.querySelectorAll(".catalogo__add").forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = Number(boton.dataset.id);
      agregarAlCarrito(id);

      boton.textContent = "✓ Agregado";
      boton.classList.add("is-added");

      setTimeout(() => {
        boton.textContent = "Agregar al carrito";
        boton.classList.remove("is-added");
      }, 1200);
    });
  });
}

/* =========================================================
   CARGA ASÍNCRONA DE PRODUCTOS (Promise + setTimeout + async/await)
========================================================= */
function consultarProductosAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 400);
  });
}

async function cargarCatalogoAsync() {
  const contenedorProductos = document.getElementById("catalogoProducts");
  if (!contenedorProductos) return;

  contenedorProductos.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-size: 14px;">
      <p>Cargando piezas exclusivas...</p>
    </div>
  `;

  try {
    const lista = await consultarProductosAPI();
    const params = new URLSearchParams(window.location.search);
    const categoriaUrl = params.get("categoria");

    if (categoriaUrl) {
      const filtrados = lista.filter((p) => p.categoria.toLowerCase() === categoriaUrl.toLowerCase());
      renderizarProductos(filtrados.length > 0 ? filtrados : lista);
      
      document.querySelectorAll(".catalogo__category").forEach((btn) => {
        btn.classList.toggle(
          "catalogo__category--active",
          btn.dataset.categoria === categoriaUrl
        );
      });
    } else {
      renderizarProductos(lista);
    }
  } catch (error) {
    console.error("Error al cargar productos:", error);
    contenedorProductos.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Error al cargar el catálogo.</p>`;
  }
}

/* =========================================================
   INICIALIZACIÓN GENERAL (DOM)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Carga asíncrona inicial del catálogo
  cargarCatalogoAsync();

  /* --- FILTROS DE CATEGORÍA --- */
  const botonesCategoria = document.querySelectorAll(".catalogo__category");
  if (botonesCategoria.length > 0) {
    botonesCategoria.forEach((boton) => {
      boton.addEventListener("click", () => {
        botonesCategoria.forEach((b) => b.classList.remove("catalogo__category--active"));
        boton.classList.add("catalogo__category--active");

        const categoria = boton.dataset.categoria;
        if (categoria === "todos") {
          cargarCatalogoAsync();
        } else if (categoria === "ofertas") {
          renderizarProductos(productos.filter((prod) => prod.oferta));
        } else if (categoria === "nuevos") {
          renderizarProductos(productos.filter((prod) => prod.nuevo));
        } else {
          renderizarProductos(productos.filter((prod) => prod.categoria === categoria));
        }
      });
    });
  }

  /* --- BUSCADOR --- */
  const inputBusqueda = document.getElementById("input-busqueda");
  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", (e) => {
      const termino = e.target.value.toLowerCase().trim();
      const filtrados = productos.filter((prod) => {
        return (
          prod.nombre.toLowerCase().includes(termino) ||
          prod.categoria.toLowerCase().includes(termino)
        );
      });
      renderizarProductos(filtrados);
    });
  }

  /* --- PANEL LATERAL CARRITO --- */
  const cartButton = document.getElementById("cartButton");
  const cartDrawer = document.getElementById("cartPanel");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartClose = document.getElementById("cartClose");

  function abrirCarrito() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.add("is-open");
    cartOverlay.classList.add("is-visible");
    document.body.classList.add("cart-open");
  }

  function cerrarCarrito() {
    if (!cartDrawer || !cartOverlay) return;
    cartDrawer.classList.remove("is-open");
    cartOverlay.classList.remove("is-visible");
    document.body.classList.remove("cart-open");
  }

  if (cartButton) cartButton.addEventListener("click", abrirCarrito);
  if (cartClose) cartClose.addEventListener("click", cerrarCarrito);
  if (cartOverlay) cartOverlay.addEventListener("click", cerrarCarrito);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrarCarrito();
  });

  renderizarCarrito();

  /* --- MENÚ MOBILE --- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("active");
      navToggle.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- NAVBAR SCROLL --- */
  const navBar = document.getElementById("navBar");
  function actualizarNavbar() {
    if (!navBar) return;
    if (window.scrollY > 30) {
      navBar.classList.add("is-scrolled");
    } else {
      navBar.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", actualizarNavbar);
  actualizarNavbar();

  /* --- SLIDER OPINIONES --- */
  const tarjetasOpiniones = document.querySelectorAll(".opiniones__card");
  const puntosOpiniones = document.querySelectorAll(".opiniones__dot");
  const sliderContainer = document.querySelector(".opiniones__slider");
  let opinionActualIndex = 0;

  if (sliderContainer && tarjetasOpiniones.length > 0) {
    sliderContainer.style.position = "relative";

    const flechaPrev = document.createElement("button");
    flechaPrev.innerHTML = "❮";
    flechaPrev.setAttribute("aria-label", "Opinión anterior");
    Object.assign(flechaPrev.style, {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer",
      color: "var(--color-primary, #333)",
      zIndex: "10",
      padding: "10px"
    });

    const flechaNext = document.createElement("button");
    flechaNext.innerHTML = "❯";
    flechaNext.setAttribute("aria-label", "Opinión siguiente");
    Object.assign(flechaNext.style, {
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer",
      color: "var(--color-primary, #333)",
      zIndex: "10",
      padding: "10px"
    });

    sliderContainer.appendChild(flechaPrev);
    sliderContainer.appendChild(flechaNext);

    function mostrarOpinion(index) {
      if (index < 0) {
        opinionActualIndex = tarjetasOpiniones.length - 1;
      } else if (index >= tarjetasOpiniones.length) {
        opinionActualIndex = 0;
      } else {
        opinionActualIndex = index;
      }

      tarjetasOpiniones.forEach((card) => {
        card.hidden = true;
        card.classList.remove("opiniones__card--active");
      });
      puntosOpiniones.forEach((punto) => {
        punto.classList.remove("opiniones__dot--active");
      });

      if (tarjetasOpiniones[opinionActualIndex]) {
        tarjetasOpiniones[opinionActualIndex].hidden = false;
        tarjetasOpiniones[opinionActualIndex].classList.add("opiniones__card--active");
      }
      if (puntosOpiniones[opinionActualIndex]) {
        puntosOpiniones[opinionActualIndex].classList.add("opiniones__dot--active");
      }
    }

    flechaPrev.addEventListener("click", () => mostrarOpinion(opinionActualIndex - 1));
    flechaNext.addEventListener("click", () => mostrarOpinion(opinionActualIndex + 1));

    puntosOpiniones.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = Number(dot.dataset.index);
        mostrarOpinion(index);
      });
    });
  }

  /* --- FORMULARIO DE CONTACTO --- */
  /* --- FORMULARIO DE CONTACTO --- */
  const contactoForm = document.getElementById("contactoForm");
  const contactoSuccess = document.getElementById("contactoSuccess");
  const inputNombre = document.getElementById("nombre");
  const inputEmail = document.getElementById("email");
  const inputConsulta = document.getElementById("consulta");

  function mostrarError(inputElement, mensaje) {
    const errorMsg = document.createElement("span");
    errorMsg.className = "error-mensaje";
    errorMsg.style.color = "#d9534f";
    errorMsg.style.fontSize = "0.85rem";
    errorMsg.style.display = "block";
    errorMsg.style.marginTop = "4px";
    errorMsg.textContent = mensaje;
    inputElement.parentNode.appendChild(errorMsg);
    inputElement.style.borderColor = "#d9534f";
  }

  function limpiarErrores() {
    document.querySelectorAll(".error-mensaje").forEach((error) => error.remove());
    [inputNombre, inputEmail, inputConsulta].forEach((input) => {
      if (input) input.style.borderColor = "";
    });
  }

  if (contactoForm) {
    contactoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      limpiarErrores();

      let formularioValido = true;
      const nombreValor = inputNombre ? inputNombre.value.trim() : "";
      if (!nombreValor) {
        mostrarError(inputNombre, "Por favor, ingresá tu nombre y apellido.");
        formularioValido = false;
      }

      const emailValor = inputEmail ? inputEmail.value.trim() : "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValor) {
        mostrarError(inputEmail, "El correo electrónico es obligatorio.");
        formularioValido = false;
      } else if (!emailRegex.test(emailValor)) {
        mostrarError(inputEmail, "Ingresá un formato de correo válido (ej: nombre@correo.com).");
        formularioValido = false;
      }

      const consultaValor = inputConsulta ? inputConsulta.value.trim() : "";
      if (!consultaValor) {
        mostrarError(inputConsulta, "Por favor, escribí tu consulta.");
        formularioValido = false;
      }

      if (formularioValido) {
        // MENSAJE DE CONFIRMACIÓN EN CONSOLA:
        console.log("✅ Formulario enviado con éxito:", {
          nombre: nombreValor,
          email: emailValor,
          consulta: consultaValor,
          fecha: new Date().toLocaleTimeString()
        });

        if (contactoSuccess) {
          contactoSuccess.textContent = `¡Gracias por tu mensaje, ${nombreValor}! Te respondemos en menos de 24 horas.`;
          contactoSuccess.hidden = false;
          contactoSuccess.classList.add("is-visible");
        }

        contactoForm.reset();

        setTimeout(() => {
          if (contactoSuccess) {
            contactoSuccess.hidden = true;
            contactoSuccess.classList.remove("is-visible");
          }
        }, 5000);
      } else {
        console.warn("⚠️ Validación de formulario fallida: revisá los campos obligatorios.");
        setTimeout(limpiarErrores, 5000);
      }
    });
  }

  /* --- REVEAL ANIMATIONS --- */
  const elementosReveal = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      const counterEl = entry.target.querySelector(".counter") || (entry.target.classList.contains("counter") ? entry.target : null);
      if (counterEl && !counterEl.dataset.animated) {
        counterEl.dataset.animated = "true";
        const target = Number(counterEl.dataset.target);
        let count = 0;
        const timer = setInterval(() => {
          count++;
          counterEl.textContent = count;
          if (count >= target) clearInterval(timer);
        }, 50);
      }
    });
  }, { threshold: 0.1 });

  elementosReveal.forEach((elemento) => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(24px)";
    elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(elemento);
  });

  document.body.classList.add("is-loaded");

  /* --- INICIALIZAR DETALLE DE PRODUCTO SI APLICA --- */
  inicializarDetalleProducto();
});

/* =========================================================
   PÁGINA DINÁMICA DE DETALLE DE PRODUCTO
========================================================= */
function inicializarDetalleProducto() {
  const detalleContenedor = document.getElementById("detalleContenedor");
  if (!detalleContenedor) return;

  const params = new URLSearchParams(window.location.search);
  const productoId = parseInt(params.get("id"), 10);

  const producto = productos.find((p) => p.id === productoId);

  if (producto) {
    document.title = `${producto.nombre} — Hermanos Jota`;
    document.getElementById("detalleTitulo").textContent = producto.nombre;
    document.getElementById("detallePrecio").textContent = formatearPrecio(producto.precio);
    document.getElementById("detalleDescripcion").textContent = producto.descripcion;

    const breadcrumb = document.getElementById("detalleCategoriaBreadcrumb");
    if (breadcrumb) {
      breadcrumb.textContent = producto.categoria.toUpperCase();
    }

    const imgEl = document.getElementById("detalleImagen");
    imgEl.src = producto.imagendetalle || producto.imagen;
    imgEl.alt = producto.nombre;

    const badgesContenedor = document.getElementById("detalleBadges");
    if (badgesContenedor) {
      badgesContenedor.innerHTML = "";
      if (producto.oferta) {
        badgesContenedor.innerHTML += `<span class="producto-badge producto-badge--oferta">OFERTA</span>`;
      }
      if (producto.nuevo) {
        badgesContenedor.innerHTML += `<span class="producto-badge producto-badge--nuevo">NUEVO</span>`;
      }
    }

    const specsContenedor = document.getElementById("detalleSpecsLista");
    if (specsContenedor && producto.especificaciones) {
      const diccionarioClaves = {
        medidas: "Medidas",
        materiales: "Materiales",
        estructura: "Estructura",
        tapizado: "Tapizado",
        relleno: "Relleno",
        sostenibilidad: "Sostenibilidad",
        acabado: "Acabado",
        capacidad: "Capacidad",
        extension: "Extensión",
        almacenamiento: "Almacenamiento",
        cables: "Gestión de cables",
        modulares: "Módulos",
        apilable: "Apilable",
        incluye: "Incluye",
        peso: "Peso",
        caracteristicas: "Características",
        cargamaxima: "Carga máxima",
        confort: "Confort",
        garantia: "Garantía",
        regulacion: "Regulación",
        certificacion: "Certificación"
      };

      specsContenedor.innerHTML = Object.entries(producto.especificaciones)
        .map(([clave, valor]) => {
          const etiqueta = diccionarioClaves[clave] || (clave.charAt(0).toUpperCase() + clave.slice(1));
          return `
            <div class="detalle-specs__row">
              <dt class="detalle-specs__label">${etiqueta}</dt>
              <dd class="detalle-specs__value">${valor}</dd>
            </div>
          `;
        })
        .join("");
    }

    const btnAgregar = document.getElementById("detalleBtnAgregar");
    if (btnAgregar) {
      btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
        btnAgregar.textContent = "✓ AGREGADO AL CARRITO";
        btnAgregar.classList.add("is-added");

        setTimeout(() => {
          btnAgregar.textContent = "AGREGAR AL CARRITO";
          btnAgregar.classList.remove("is-added");
        }, 1500);
      });
    }
  } else {
    detalleContenedor.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 90px 20px;">
        <h2 style="font: 400 38px 'Playfair Display', serif; margin-bottom: 12px;">Pieza no encontrada</h2>
        <p style="color: var(--text-muted); font-size: 15px; margin-bottom: 30px;">
          El artículo seleccionado no existe o no se encuentra disponible en nuestro catálogo.
        </p>
        <a href="./productos.html" class="hero-copy__button" style="text-decoration: none;">VOLVER AL CATÁLOGO</a>
      </div>
    `;
  }
}

/* Controladores para cantidad de producto individual (si existen en HTML) */
function sumarCantidad() {
  const input = document.getElementById("cantidad-producto");
  if (input) input.value = parseInt(input.value) + 1;
}

function restarCantidad() {
  const input = document.getElementById("cantidad-producto");
  if (input && parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}
