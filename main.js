document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     CATÁLOGO
  ========================================================= */

  const productos = [
    {
      id: 1,
      nombre: "Sillón Patagonia 2 Cuerpos",
      categoria: "livings",
      precio: 120000,
      imagen: "./assets/Group 6.png",
      oferta: true,
      nuevo: false
    },
    {
      id: 2,
      nombre: "Mesa Comedor Paraíso",
      categoria: "comedor",
      precio: 85000,
      imagen: "./assets/Group 7.png",
      oferta: false,
      nuevo: true
    },
    {
      id: 3,
      nombre: "Escritorio San Telmo",
      categoria: "estudio",
      precio: 65000,
      imagen: "./assets/Group 8.png",
      oferta: false,
      nuevo: true
    },
    {
      id: 4,
      nombre: "Biblioteca Recoleta",
      categoria: "livings",
      precio: 95000,
      imagen: "./assets/Group 6.png",
      oferta: true,
      nuevo: false
    },
    {
      id: 5,
      nombre: "Silla Eames Algarrobo",
      categoria: "comedor",
      precio: 32000,
      imagen: "./assets/Group 7.png",
      oferta: false,
      nuevo: false
    },
    {
      id: 6,
      nombre: "Rack Patagonia",
      categoria: "livings",
      precio: 110000,
      imagen: "./assets/Group 8.png",
      oferta: false,
      nuevo: true
    },
    {
      id: 7,
      nombre: "Mesa de Luz Norte",
      categoria: "livings",
      precio: 42000,
      imagen: "./assets/Group 6.png",
      oferta: true,
      nuevo: false
    },
    {
      id: 8,
      nombre: "Mesa de Centro Jota",
      categoria: "livings",
      precio: 58000,
      imagen: "./assets/Group 7.png",
      oferta: false,
      nuevo: true
    },
    {
      id: 9,
      nombre: "Biblioteca San Telmo",
      categoria: "estudio",
      precio: 125000,
      imagen: "./assets/Group 8.png",
      oferta: false,
      nuevo: false
    },
    {
      id: 10,
      nombre: "Escritorio Algarrobo",
      categoria: "estudio",
      precio: 98000,
      imagen: "./assets/Group 7.png",
      oferta: true,
      nuevo: true
    }
  ];

  const contenedorProductos =
    document.getElementById("catalogoProducts");

  let carrito = JSON.parse(localStorage.getItem("carritoJota")) || [];

  function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0
    }).format(precio);
  }

  /* =========================================================
     RENDER PRODUCTOS
  ========================================================= */

  function renderizarProductos(lista) {
    if (!contenedorProductos) return;

    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {
      contenedorProductos.innerHTML = `
        <div class="catalogo__empty">
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

        <div class="catalogo__info">
          <p class="catalogo__name">${producto.nombre}</p>

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

    document.querySelectorAll(".catalogo__add").forEach((boton) => {
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
     FILTROS
  ========================================================= */

  const botonesCategoria =
    document.querySelectorAll(".catalogo__category");

  botonesCategoria.forEach((boton) => {
    boton.addEventListener("click", () => {
      botonesCategoria.forEach((b) =>
        b.classList.remove("catalogo__category--active")
      );

      boton.classList.add("catalogo__category--active");

      const categoria = boton.dataset.categoria;

      if (categoria === "todos") {
        renderizarProductos(productos);
      } else if (categoria === "ofertas") {
        renderizarProductos(
          productos.filter((producto) => producto.oferta)
        );
      } else if (categoria === "nuevos") {
        renderizarProductos(
          productos.filter((producto) => producto.nuevo)
        );
      } else {
        renderizarProductos(
          productos.filter(
            (producto) => producto.categoria === categoria
          )
        );
      }
    });
  });

  renderizarProductos(productos);

  /* =========================================================
     CARRITO
  ========================================================= */

  const cartButton = document.getElementById("cartButton");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartClose = document.getElementById("cartClose");
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  function guardarCarrito() {
    localStorage.setItem(
      "carritoJota",
      JSON.stringify(carrito)
    );
  }

  function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);

    if (!producto) return;

    const productoExistente = carrito.find(
      (item) => item.id === id
    );

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
    abrirCarrito();
  }

  function cambiarCantidad(id, cambio) {
    const item = carrito.find((producto) => producto.id === id);

    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
      carrito = carrito.filter(
        (producto) => producto.id !== id
      );
    }

    guardarCarrito();
    renderizarCarrito();
  }

  function eliminarDelCarrito(id) {
    carrito = carrito.filter(
      (producto) => producto.id !== id
    );

    guardarCarrito();
    renderizarCarrito();
  }

  function renderizarCarrito() {
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

      if (cartCount) {
        cartCount.textContent = "0";
      }

      if (cartTotal) {
        cartTotal.textContent = formatearPrecio(0);
      }

      return;
    }

    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((item) => {
      const producto = productos.find(
        (producto) => producto.id === item.id
      );

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

          <p class="carrito-item__price">
            ${formatearPrecio(producto.precio)}
          </p>

          <div class="carrito-item__bottom">
            <div class="cantidad-control">
              <button
                type="button"
                data-action="menos"
                data-id="${producto.id}"
                aria-label="Disminuir cantidad"
              >
                −
              </button>

              <span>${item.cantidad}</span>

              <button
                type="button"
                data-action="mas"
                data-id="${producto.id}"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            <button
              type="button"
              class="carrito-item__delete"
              data-action="eliminar"
              data-id="${producto.id}"
            >
              Eliminar
            </button>
          </div>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });

    if (cartCount) {
      cartCount.textContent = cantidadTotal;
    }

    if (cartTotal) {
      cartTotal.textContent = formatearPrecio(total);
    }

    cartItems.querySelectorAll("[data-action]").forEach((boton) => {
      const id = Number(boton.dataset.id);
      const action = boton.dataset.action;

      if (action === "mas") {
        boton.addEventListener("click", () =>
          cambiarCantidad(id, 1)
        );
      }

      if (action === "menos") {
        boton.addEventListener("click", () =>
          cambiarCantidad(id, -1)
        );
      }

      if (action === "eliminar") {
        boton.addEventListener("click", () =>
          eliminarDelCarrito(id)
        );
      }
    });
  }

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

  if (cartButton) {
    cartButton.addEventListener("click", abrirCarrito);
  }

  if (cartClose) {
    cartClose.addEventListener("click", cerrarCarrito);
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", cerrarCarrito);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cerrarCarrito();
    }
  });

  renderizarCarrito();

  /* =========================================================
     MENÚ RESPONSIVE
  ========================================================= */

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      navToggle.classList.toggle("active");
      navToggle.classList.toggle("is-open");

      navToggle.setAttribute(
        "aria-expanded",
        isOpen
      );
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("active");
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("open");

        navToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }

  /* =========================================================
     NAVBAR AL HACER SCROLL
  ========================================================= */

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

  /* =========================================================
     SLIDER DE OPINIONES
  ========================================================= */

  const tarjetasOpiniones =
    document.querySelectorAll(".opiniones__card");

  const puntosOpiniones =
    document.querySelectorAll(".opiniones__dot");

  puntosOpiniones.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);

      tarjetasOpiniones.forEach((card) => {
        card.hidden = true;
        card.classList.remove(
          "opiniones__card--active"
        );
      });

      puntosOpiniones.forEach((punto) => {
        punto.classList.remove(
          "opiniones__dot--active"
        );
      });

      if (tarjetasOpiniones[index]) {
        tarjetasOpiniones[index].hidden = false;
        tarjetasOpiniones[index].classList.add(
          "opiniones__card--active"
        );
      }

      dot.classList.add(
        "opiniones__dot--active"
      );
    });
  });

  /* =========================================================
     FORMULARIO
  ========================================================= */

  const contactoForm =
    document.getElementById("contactoForm");

  const contactoSuccess =
    document.getElementById("contactoSuccess");

  if (contactoForm) {
    contactoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (contactoSuccess) {
        contactoSuccess.hidden = false;
        contactoSuccess.classList.add("is-visible");
      }

      contactoForm.reset();

      setTimeout(() => {
        if (contactoSuccess) {
          contactoSuccess.hidden = true;
          contactoSuccess.classList.remove(
            "is-visible"
          );
        }
      }, 4000);
    });
  }

  /* =========================================================
     REVEAL + CONTADORES
  ========================================================= */

  const elementosReveal =
    document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";
        entry.target.style.transform =
          "translateY(0)";

        const counterEl =
          entry.target.querySelector(".counter") ||
          (entry.target.classList.contains("counter")
            ? entry.target
            : null);

        if (
          counterEl &&
          !counterEl.dataset.animated
        ) {
          counterEl.dataset.animated = "true";

          const target = Number(
            counterEl.dataset.target
          );

          let count = 0;

          const timer = setInterval(() => {
            count++;

            counterEl.textContent = count;

            if (count >= target) {
              clearInterval(timer);
            }
          }, 50);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elementosReveal.forEach((elemento) => {
    elemento.style.opacity = "0";
    elemento.style.transform =
      "translateY(24px)";

    elemento.style.transition =
      "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(elemento);
  });

  /* =========================================================
     HERO
  ========================================================= */

  document.body.classList.add("is-loaded");
});