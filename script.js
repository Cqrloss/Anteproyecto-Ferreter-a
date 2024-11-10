     
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    
        this.classList.toggle("active");

      
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
  const productos = [
    {
      id: 1,
      Codigo:"HER001C",
      clase:"Herramienta",
      color:"Gris",
      nombre: "Martillo Latonero 11 Oz",
      precio: 25000,
      imagenes: ["resources/images/productos/Instrumentos/Martillos.jfif"],
      descripcion: " Modelo : TRP16864 , Términos Garantía : Directamente con la marca en sus centros de servicio técnico autorizados a nivel nacional, Garantía Producto : 12 meses."
    },
    {
      id: 2,
      Codigo:"HER002C",
      clase:"Herramienta",
      color:"Negro",
      nombre: "Martillo Astillador 12.000BPM TFC-200",
      precio: 89000,
      imagenes: ["resources/images/productos/Instrumentos/Martillos2.jfif"],
      descripcion: "Siempre use la cantidad correcta de presión de aire establecida en el manual de operación adjunto en la herramienta, en caso de que el manual de operación no este incluido en la herramienta al comprar"
    },
    {
      id: 3,
      Codigo:"BRO001B",
      clase:"Herramienta",
      color:"Amarillo",
      nombre: "Kit de Brochas",
      precio: 67000,
      imagenes: ["resources/images/productos/Instrumentos/Brochas.jfif"],
      descripcion: "Con este Kit de Brochas podrás pintar lo que gustes dependiendo sus tamaños."
    },
    {
      id: 4,
      Codigo:"TAL001T",
      clase:"Herramienta",
      color:"Negro",
      nombre: "Taladro Automático",
      precio: 130000,
      imagenes: ["resources/images/productos/Instrumentos/Taladro.jfif"],
      descripcion: "Taladro de excelente calidad, utilizalo con confianza."
    },
    {
      id: 5,
      Codigo:"SER00S",
      clase:"Herramienta",
      color:"Amarrilo",
      nombre: "Serrucho STANLEY 550MM",
      precio: 30000,
      imagenes: ["resources/images/productos/Instrumentos/serrucho.jfif"],
      descripcion: "Serrucho de excelente calidad, utilizalo con confianza."
    },
    {
      id: 6,
      Codigo:"EXT001E",
      clase:"Cables",
      color:"Negro",
      nombre: "Extensiones",
      precio: 12000,
      imagenes: ["resources/images/productos/Instrumentos/extensiones.jpg"],
      descripcion: "Extensiones de alta calidad de todo tipo de tamaño."
    },
    {
      id: 7,
      Codigo:"PIN001P",
      clase:"Pinturas",
      color:"Gris",
      nombre: "Pinturas de todo tipo de Marca",
      precio: 39900,
      imagenes: ["resources/images/productos/Instrumentos/pinturas.jfif"],
      descripcion: "Pinturas de todo tipo de marca de excelente calidad"
    },
    {
      id: 8,
      Codigo:"LLA001L",
      clase:"Llaves",
      color:"Plateado",
      nombre: "Kit de Llaves",
      precio: 30000,
      imagenes: ["resources/images/productos/Instrumentos/llaveskit.jfif"],
      descripcion: "Las llaves son herramientas que se utilizan para realizar ajustes mecánicos de todo tipo, tienen una cabeza o boca en cada uno de sus dos costados y pueden ser de forma diferente o iguales."
    },
    {
      id: 9,
      Codigo:"GUA001G",
      clase:"Accesorio",
      color:"Amarillo",
      nombre: "Guantes para construcción",
      precio: 18000,
      imagenes: ["resources/images/productos/Instrumentos/guantes.jfif"],
      descripcion: "Nuestros guantes de ferretería están diseñados para ofrecer máxima protección y comodidad durante trabajos pesados, brindando seguridad y agarre confiable en una amplia variedad de tareas. Ideales para carpintería, construcción, trabajos mecánicos y otros proyectos, estos guantes protegen tus manos sin sacrificar la destreza y precisión."
    },
    

{
    id: 10,
    Codigo:"MET001",
    clase:"Herramienta",
    color:"Naranja",
    nombre: "Metro - Medidor TRUPER",
    precio: 12000,
    imagenes: ["resources/images/productos/Instrumentos/metro.jfif"],
    descripcion: "Cinta métrica compacta de la marca Truper, con una longitud de medición de 8 metros o 26 pies. El diseño es compacto y robusto, ideal para trabajos de medición precisos y cómodos en el hogar o en proyectos profesionales."
  },
  {
    id: 11,
    Codigo:"BAT002",
    clase:"Herramienta",
    color:"Negro",
    nombre: "Kit de Baterias",
    precio: 17000,
    imagenes: ["resources/images/productos/Instrumentos/kitbaterias.jfif"],
    descripcion: "Este kit de baterías recargables es la solución ideal para mantener todos tus dispositivos electrónicos en funcionamiento sin necesidad de comprar baterías desechables constantemente. Con una tecnología de carga rápida y una larga duración de carga, este kit es perfecto para cámaras, herramientas eléctricas, juguetes, linternas y otros dispositivos de uso frecuente."
  },
  {
    id: 12,
    Codigo:"ALI001",
    clase:"Herramienta",
    color:"Rojo",
    nombre: "Kit de Alicates",
    precio: 20000,
    imagenes: ["resources/images/productos/Instrumentos/alicates.jfif"],
    descripcion: "El Zoom G5 es una pedalera multiefectos que ofrece una amplia gama de efectos y sonidos. Perfecto para guitarristas que buscan experimentar con diferentes sonidos."
  },
  {
    id: 13,
   Codigo:"CAS001C",
    clase:"Accesorios",
   color:"Amarillo", 
   nombre: "Casco para seguridad ",
    precio: 20000,
    imagenes: ["resources/images/productos/Instrumentos/cascos.jfif"],
    descripcion: "Los cascos de seguridad son equipos de protección personal (EPP) diseñados para proteger la cabeza de lesiones causadas por impactos, caídas de objetos, golpes con estructuras, y otros riesgos presentes en entornos de trabajo peligrosos como la construcción, la industria y la minería. Estos cascos generalmente están fabricados de materiales resistentes como policarbonato, polietileno o fibra de vidrio, que absorben y distribuyen la energía del impacto para minimizar el daño."
  },
  {
    id: 14,
    Codigo:"MAL001M",
    clase:"Herramienta",
    color:"Gris",
    nombre: "Mallas Plateadas ferretería",
    precio: 2000,
    imagenes: ["resources/images/productos/Instrumentos/Mallas.jpg"],
    descripcion: "Mallas x metro de buena calidad"
  },
  {
    id: 15,
    Codigo:"TOR001",
    clase:"Tornillos",
    color:"Plateado",
    nombre: "Tornillos de todo tipo",
    precio: 500,
    imagenes: ["resources/images/productos/Instrumentos/tornillos.jfif"],
    descripcion: "El Behringer C-1U es un micrófono de condensador de alta calidad que es perfecto para grabar voces e instrumentos acústicos."
  },
  {
    id: 16,
    Codigo:"BOM001",
    clase:"Herramienta",
    color:"Blancos",
    nombre: "Bombillos de todo tipo de tamaño",
    precio: 2500,
    imagenes: ["resources/images/productos/Instrumentos/bombillos.jfif"],
    descripcion: "Bombillos de todo tipo de tamaño, buena calidad."
  },
  {
    id: 17,
    Codigo:"TEN001",
    clase:"Herramienta",
    color:"Negro",
    nombre: "Tenazas",
    precio: 5000,
    imagenes: ["resources/images/productos/Instrumentos/Tenazas.jfif"],
    descripcion: "Tenazas de todo tipo, de buena calidad."
  },
  {
    id: 18,
    Codigo:"CUT001C",
    clase:"Herramienta",
    color:"Negro",
    nombre: "Cúters y navajas",
    precio: 6000,
    imagenes: ["resources/images/productos/Instrumentos/cuters.jfif"],
    descripcion: "Cúters y navajas de todo tipo."
  },
  {
    id: 19,
    Codigo:"SIE001",
    clase:"Herramienta",
    color:"Negro",
    nombre: "Sierra Caladora",
    precio: 120000,
    imagenes: ["resources/images/productos/Instrumentos/sierra.jfif"],
    descripcion: "Sierra caladora grande"
  },


  {
    id: 20,
    Codigo:"COMP001",
    clase:"Equipo",
    color:"Gris",
    nombre: "Compresores de aire",
    precio: 300000,
    imagenes: ["resources/images/productos/Instrumentos/Compresores de aire.jfif"],
    descripcion: "Compresores de aire de buena calidad."
  },
  {
    id: 21,
   Codigo:"PUL001",
    clase:"Equipo",
   color:"Negro", 
   nombre: "Pulidoras",
    precio: 154000,
    imagenes: ["resources/images/productos/Instrumentos/pulidoras.jfif"],
    descripcion: "Pulidoras de buena marca y calidad."
  },
  {
    id: 22,
    Codigo:"SOL001",
    clase:"Equipo",
    color:"Negro",
    nombre: "Soldadoras",
    precio: 200000,
    imagenes: ["resources/images/productos/Instrumentos/Soldadoras.jfif"],
    descripcion: "Soldadoras de buena calidad y de todo tipo de color."
  },
  {
    id: 23,
    Codigo:"DEC001",
    clase:"Equipo",
    color:"Negro",
    nombre: "Decapadoras",
    precio: 150000,
    imagenes: ["resources/images/productos/Instrumentos/Decapadoras.jfif"],
    descripcion: "Decapadoras de todo tipo de colores y buena calidad."
  },
  {
    id: 24,
    Codigo:"ARA001",
    clase:"Tornillos",
    color:"Plateado",
    nombre: "Arandelas",
    precio: 500,
    imagenes: ["resources/images/productos/Instrumentos/Arandelas.jfif"],
    descripcion: "Arandelas de todo tipo de tamaño."
  },
  {
    id: 25,
    Codigo:"MADE001",
    clase:"Material",
    color:"Madera",
    nombre: "Tablones de madera",
    precio: 30000,
    imagenes: ["resources/images/productos/Instrumentos/maderas.jfif"],
    descripcion: "Tablones de madera de buena calidad y fina."
  },
  {
    id: 26,
    Codigo:"GAF001",
    clase:"Accesorios",
    color:"Amarillas",
    nombre: "Gafas protectoras",
    precio: 12000,
    imagenes: ["resources/images/productos/Instrumentos/gafas.jfif"],
    descripcion: "Gafas protectoras de buena calidad."
  },
  {
    id: 27,
    Codigo:"PLA002",
    clase:"Material",
    color:"Negro",
    nombre: "Placas",
    precio: 149000,
    imagenes: ["resources/images/productos/Instrumentos/placas.jfif"],
    descripcion: "Placas de buena calidad y precio."
  },
  {
    id: 28,
    Codigo:"",
    clase:"Accesorios",
    color:"Negro",
    nombre: "Mascarillas y respiradores",
    precio: 20000,
    imagenes: ["resources/images/productos/Instrumentos/mascaras.jfif"],
    descripcion: "Mascarillas y respiradores de buena calidad."
  },
  {
    id: 29,
    Codigo:"",
    clase:"Accesorios",
    color:"Negro",
    nombre: "Chalecos reflectantes",
    precio: 20000,
    imagenes: ["resources/images/productos/Instrumentos/chaleco.jfif"],
    descripcion: "Chalecos reflectantes de buena calidad."
  },

  {
    id: 31,
    Codigo:"ACC0013",
    clase:"accesorios",
    color:"Negro, Morado, Rosa, Azul",
    nombre: "Botas de seguridad",
    precio: 30000,
    imagenes: ["resources/images/productos/Instrumentos/botas.jfif"],
    descripcion: "Botas de buena calidad"
  },
  {
    id: 32,
    Codigo:"ACC0014",
    clase:"accesorios",
    color:"Negro",
    nombre: "Audifonos",
    precio: 50000,
    imagenes: ["resources/images/productos/Instrumentos/audifonos.jfif"],
    descripcion: "Audifonos de buena calidad."
  },
  {
    id: 33,
    Codigo:"ACC0015",
    clase:"accesorios",
    color:"Cafe(Interior:Rojo)",
    nombre: "Arnés de seguridad",
    precio: 149000,
    imagenes: ["resources/images/productos/Instrumentos/arnes.jfif"],
    descripcion: "Arnes de buena seguridad y calidad."
  },
  {
    id: 34,
    Codigo:"REP001G",
    clase:"Equipos",
    color:"Madera",
    nombre: "Bandejas para pintura",
    precio: 30000,
    imagenes: ["resources/images/productos/Instrumentos/bandas.jfif"],
    descripcion: "Bandejas para pintura de buena calidad."
  },
  {
    id: 35,
    Codigo:"REP001G",
    clase:"repuestos",
    color:"Dorado, Plateado",
    nombre: "Aerosoles",
    precio: 25000,
    imagenes: ["resources/images/productos/Instrumentos/Aerosoles.jfif"],
    descripcion: "Aerosoles de todo tipo de color."
  },
  {
    id: 36,
    Codigo:"REP001G",
    clase:"repuestos",
    color:"Dorado, Plateado",
    nombre: "Grifos y mezcladoras",
    precio: 60000,
    imagenes: ["resources/images/productos/Instrumentos/Grifos y mezcladoras.jfif"],
    descripcion: "Grifos y mezcladoras de buena calidad"
  },
  {
    id: 37,
    Codigo:"ACC0016",
    clase:"accesorios",
    color:"Dorado",
    nombre: "Selladores",
    precio: 59000,
    imagenes: ["resources/images/productos/Instrumentos/Selladores.jfif"],
    descripcion: "Selladores de todo tipo de color."
  },
  {
    id: 38,
    Codigo:"ACC0017",
    clase:"accesorios",
    color:"Negro",
    nombre: "Cables y alambres",
    precio: 500,
    imagenes: ["resources/images/productos/Instrumentos/alambres.jfif"],
    descripcion: "Cables y alambres de todo tipo y tamaño"
  },
  {
    id: 39,
    Codigo:"ACC0018",
    clase:"accesorios",
    color:"Azul, Negro, Rojo",
    nombre: "Interruptores y enchufes",
    precio: 4000,
    imagenes: ["resources/images/productos/Instrumentos/enchufes.jfif"],
    descripcion: "Interruptores y enchufes de buena calidad"
  },
  {
    id: 40,
    Codigo:"ACC0019",
    clase:"accesorios",
    color:"Negro",
    nombre: "Canaletas y tubos eléctricos",
    precio: 99000,
    imagenes: ["resources/images/productos/Instrumentos/canaletas.jfif"],
    descripcion: "Canaletas y tubos eléctricos de todo tipo."
  },

    
];
const productosContainer = document.getElementById('productos-container');
      const carritoContainer = document.getElementById('carrito-container');
      const searchInput = document.getElementById('search-input');
      const carrito = [];
      let searchText = '';
      let precioMinimo = 0;
      let precioMaximo = Infinity;

      function mostrarProductos(productos) {
        productosContainer.innerHTML = '';
        productos.forEach(producto => {
          if (producto.nombre.toLowerCase().includes(searchText.toLowerCase()) && producto.precio >= precioMinimo && producto.precio <= precioMaximo) {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');

            const imagenElement = document.createElement('img');
            imagenElement.src = producto.imagenes[0];
            imagenElement.alt = producto.nombre;

            const nombreElement = document.createElement('h3');
            nombreElement.textContent = producto.nombre;

            const precioElement = document.createElement('p');
            precioElement.textContent = `Precio: ${producto.precio}`;

            const descripcionElement = document.createElement('p');
            descripcionElement.textContent = producto.descripcion;

            const agregarCarritoButton = document.createElement('button');
            agregarCarritoButton.textContent = 'Agregar al Carrito';
            agregarCarritoButton.addEventListener('click', () => {
              agregarAlCarrito(producto);
            });

            productoElement.appendChild(imagenElement);
            productoElement.appendChild(nombreElement);
            productoElement.appendChild(precioElement);
            productoElement.appendChild(descripcionElement);
            productoElement.appendChild(agregarCarritoButton);

            productosContainer.appendChild(productoElement);
          }
        });
      }

      function agregarAlCarrito(producto) {
        carrito.push(producto);
        mostrarCarrito();
      }

      function mostrarCarrito() {
        carritoContainer.innerHTML = '';
        carrito.forEach(producto => {
          const carritoItem = document.createElement('div');
          carritoItem.textContent = producto.nombre;
          carritoContainer.appendChild(carritoItem);
        });
      }

      function filtrarPorPrecio(min, max) {
        precioMinimo = min;
        precioMaximo = max;
        mostrarProductos(productos);
      }

      document.getElementById('btn-menor-500000').addEventListener('click', () => {
        filtrarPorPrecio(0, 500000);
      });

      document.getElementById('btn-500000-1000000').addEventListener('click', () => {
        filtrarPorPrecio(500000, 1000000);
      });

      document.getElementById('btn-mayor-1000000').addEventListener('click', () => {
        filtrarPorPrecio(1000000, Infinity);
      });

      // Función para filtrar los productos según la búsqueda
      function filtrarProductos() {
        searchText = searchInput.value.trim();
        mostrarProductos(productos);
      }

      // Evento para actualizar la búsqueda cada vez que el usuario escribe algo
      searchInput.addEventListener('input', filtrarProductos);

      // Mostrar todos los productos al cargar la página
      mostrarProductos(productos);
    });