Proyecto: Mueblería Hermanos Jota

Integrantes: 
Clara Sofía Rolón
Jimena Colque
Pablo Velázquez

Descripción de Funcionalidades del Proyecto

El sitio web de Hermanos Jota es una plataforma de comercio electrónico desarrollada con JavaScript vanilla (ES6+), HTML5 semántico y CSS3 moderno. El diseño original de la página fue creado manualmente en Figma e implementado como código utilizando Cursor y la IA Gemini. Las imágenes originales proporcionadas por el cliente fueron intervenidas con Nano Banana, y se crearon imágenes nuevas utilizando Midjourney.

A continuación se detallan los módulos funcionales implementados:

1. Catálogo Dinámico y Renderizado en el DOM
-Estructura de datos en memoria: Los productos se administran a través de una colección de objetos JavaScript que contienen identificadores únicos (`id`), metadatos (`nombre`, `categoria`), valores numéricos (`precio`), rutas a recursos gráficos (`imagen`) y banderas booleanas (`oferta`, `nuevo`).

-Inyección dinámica de componentes: La interfaz construye las tarjetas de productos (`article.catalogo__card`) programáticamente mediante manipulación del DOM, desacoplando el contenido estático de la capa lógica.

-Formateo de moneda local: Implementación de la API nativa `Intl.NumberFormat` con localización argentina (`es-AR`) para formatear los precios numéricos a moneda nacional sin decimales innecesarios.

-Etiquetas de estado condicionales (Badges): Renderizado automático de insignias de "OFERTA" o "NUEVO" evaluando los atributos booleanos de cada producto antes de insertarlo en la vista.



2. Sistema de Búsqueda y Filtrado Reactivo
-Búsqueda en tiempo real: Campo de entrada (`input[type="search"]`) conectado a un evento reactivo `input`. Evalúa en tiempo real las coincidencias insensibles a mayúsculas y espacios entre la búsqueda del usuario y los títulos o categorías de los muebles.

-Filtros por categoría: Botonera interactiva que permite segmentar el catálogo (Living, Comedor, Estudio, Ofertas, Nuevos o Catálogo completo), administrando estados activos visuales y recalculando la vista.

-Gestión de estado vacío (Empty State): Ante búsquedas o selecciones sin resultados coincidentes, la interfaz inyecta un mensaje informativo amigable indicando la ausencia de artículos disponibles.



3. Carrito de Compras con Persistencia
-Gestión completa de artículos: Posibilidad de agregar productos directamente desde la grilla con feedback visual temporal (`✓ Agregado`).

-Control de unidades: En el panel lateral, el usuario puede incrementar, decrementar o eliminar ítems individuales del carrito.

-Cálculo dinámico de totales: Recálculo instantáneo de la cantidad total de artículos reflejada en el badge del header, subtotales por producto y monto total general a abonar.

-Persistencia en el navegador (`localStorage`): El estado del carrito se serializa y almacena en el cliente, permitiendo conservar los productos seleccionados incluso tras recargar la página o cerrar el navegador.

-Panel lateral accesible (Drawer UI): Apertura y cierre asistido mediante superposición oscura (overlay), botones dedicados y escucha del teclado para cierre rápido con la tecla `Escape`.



4. Navegación, Animaciones y Microinteracciones
-Menú responsive para dispositivos móviles: Botón hamburguesa accesible con gestión de atributos ARIA (`aria-expanded`) para alternar la visibilidad de los enlaces en pantallas reducidas.

-Barra de navegación adaptativa (Sticky Navbar): Escucha del evento `scroll` para alternar estilos de fondo y sombras cuando el usuario supera los 30px de desplazamiento vertical.

-Animaciones de revelado y contadores dinámicos: Integración de la API moderna `IntersectionObserver` para ejecutar animaciones de aparición fluida (fade/slide-up) y conteo progresivo en métricas solo cuando los elementos entran en el campo visual (viewport).

-Carrusel / Slider de opiniones: Controles interactivos de navegación anterior/siguiente y paginación por puntos (dots) para alternar testimonios de clientes de manera circular.


5. Validación y Gestión de Formularios
-Validación client-side: Comprobación preventiva de campos vacíos en el formulario de contacto antes de permitir el envío.

-Validación de correo electrónico por RegEx: Comprobación sintáctica del formato de dirección de correo electrónico provisto.

-Retroalimentación de errores y confirmación: Inserción de mensajes de error contextuales en rojo sobre cada campo problemático y notificación de éxito tras un envío correcto, limpiando el formulario automáticamente.
