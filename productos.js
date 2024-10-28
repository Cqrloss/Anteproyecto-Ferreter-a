
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
      Codigo:"INS001C",
      clase:"instrumento",
      color:"Madera",
      nombre: "Guitarra Eléctrica Yamaha PAC112J Natural",
      precio: 1350000,
      imagenes: ["resources/images/productos/Instrumentos/Yamaha1.jpg"],
      descripcion: "La Yamaha Pacifica 112J alberga versatilidad en su naturaleza. Equipado con un humbucker de cerámica de puente, los músicos pueden sacar los tonos solistas intensos y cálidos que definieron el género del rock 'n' roll."
    },
    {
      id: 2,
      Codigo:"INS002C",
      clase:"instrumento",
      color:"Blanco",
      nombre: "Bajo Eléctrico Squier Affinity Precision Bass PJ",
      precio: 899000,
      imagenes: ["resources/images/productos/Instrumentos/bajo1.webp"],
      descripcion: "El Squier Affinity Precision Bass PJ ofrece un sonido clásico y una sensación familiar a un precio increíble. Perfecto para bajistas principiantes e intermedios."
    },
    {
      id: 3,
      Codigo:"INS001T",
      clase:"instrumento",
      color:"Negro",
      nombre: "Teclado Yamaha PSR-E373",
      precio: 1249000,
      imagenes: ["resources/images/productos/Instrumentos/teclado1.jpg"],
      descripcion: "El Yamaha PSR-E373 es un teclado versátil con una amplia gama de funciones y sonidos. Perfecto para principiantes que buscan aprender a tocar el piano o para músicos experimentados que buscan un teclado portátil para actuaciones en vivo."
    },
    {
      id: 4,
      Codigo:"INS001P",
      clase:"instrumento",
      color:"Naranja",
      nombre: "Batería Acústica Pearl Export ELX",
      precio: 3299000,
      imagenes: ["resources/images/productos/Instrumentos/bateria1.jpg"],
      descripcion: "La Pearl Export ELX es una batería de alta calidad que ofrece un sonido excelente y una gran durabilidad. Perfecta para bateristas de todos los niveles."
    },
    {
      id: 5,
      Codigo:"INS003C",
      clase:"instrumento",
      color:"Madera Oscura",
      nombre: "Ukelele Soprano Kala KA-15S",
      precio: 149000,
      imagenes: ["resources/images/productos/Instrumentos/ukelele1.jpg"],
      descripcion: "El Kala KA-15S es un ukelele soprano asequible y de alta calidad. Perfecto para principiantes que buscan aprender a tocar el ukelele o para músicos experimentados que buscan un ukelele portátil para viajar."
    },
    {
      id: 6,
      Codigo:"AMP001G",
      clase:"amplificador",
      color:"Negro",
      nombre: "Amplificador de Guitarra Marshall MG10",
      precio: 649000,
      imagenes: ["resources/images/productos/Instrumentos/ampli1.webp"],
      descripcion: "El Marshall MG10 es un amplificador de guitarra compacto y potente que ofrece un sonido clásico de Marshall. Perfecto para guitarristas principiantes e intermedios."
    },
    {
      id: 7,
      Codigo:"ACC001",
      clase:"accesorios",
      color:"Transparente",
      nombre: "Audífonos In-Ear Shure SE215",
      precio: 399000,
      imagenes: ["resources/images/productos/Instrumentos/inear1.jpg"],
      descripcion: "Los Shure SE215 son audífonos in-ear que ofrecen un sonido claro y preciso. Perfectos para músicos que necesitan escuchar su música con detalle."
    },
    {
      id: 8,
      Codigo:"ACC002",
      clase:"accesorios",
      color:"Negro",
      nombre: "Atril para Partituras K&M 18880",
      precio: 129000,
      imagenes: ["resources/images/productos/Instrumentos/atril1.jpg"],
      descripcion: "El K&M 18880 es un atril para partituras resistente y ajustable. Perfecto para músicos de todos los niveles."
    },
    {
      id: 9,
      Codigo:"ACC003",
      clase:"accesorios",
      color:"Negro",
      nombre: "Capo Planet Waves NS Pro",
      precio: 39000,
      imagenes: ["resources/images/productos/Instrumentos/capo1.webp"],
      descripcion: "El Planet Waves NS Pro es un capo versátil y fácil de usar. Perfecto para guitarristas que necesitan cambiar rápidamente de tono."
    },
    

{
    id: 10,
    Codigo:"ACC004",
    clase:"accesorios",
    color:"Negro",
    nombre: "Afinador Digital Korg TM-70T",
    precio: 49000,
    imagenes: ["resources/images/productos/Instrumentos/afinador1.jpg"],
    descripcion: "El Korg TM-70T es un afinador digital preciso y fácil de usar. Perfecto para músicos de todos los niveles."
  },
  {
    id: 11,
    Codigo:"ACC005",
    clase:"accesorios",
    color:"Negro",
    nombre: "Metrónomo Digital Boss DB-30",
    precio: 69000,
    imagenes: ["resources/images/productos/Instrumentos/metro1.webp"],
    descripcion: "El Boss DB-30 es un metrónomo digital preciso y versátil. Perfecto para músicos que necesitan practicar con un ritmo constante."
  },
  {
    id: 12,
    Codigo:"ACC006",
    clase:"accesorios",
    color:"Plateado",
    nombre: "Pedalera Multiefectos Zoom G5",
    precio: 849000,
    imagenes: ["resources/images/productos/Instrumentos/pedal.webp"],
    descripcion: "El Zoom G5 es una pedalera multiefectos que ofrece una amplia gama de efectos y sonidos. Perfecto para guitarristas que buscan experimentar con diferentes sonidos."
  },
  {
    id: 13,
   Codigo:"SON001",
    clase:"sonido",
   color:"Rojo", 
   nombre: "Interface de Audio Focusrite Scarlett 2i2",
    precio: 599000,
    imagenes: ["resources/images/productos/Instrumentos/tarjeta1.jpg"],
    descripcion: "La Focusrite Scarlett 2i2 es una interfaz de audio de alta calidad que permite grabar y reproducir audio en un ordenador. Perfecta para músicos que quieren crear música en casa."
  },
  {
    id: 14,
    Codigo:"",
    clase:"software",
    color:"",
    nombre: "Software de Producción Musical Ableton Live Lite",
    precio: 349000,
    imagenes: ["resources/images/productos/Instrumentos/ableton.webp"],
    descripcion: "El Ableton Live Lite es un software de producción musical que permite grabar, editar y producir música. Perfecto para músicos que quieren crear música electrónica o experimental."
  },
  {
    id: 15,
    Codigo:"",
    clase:"microfonos",
    color:"Plateado",
    nombre: "Micrófono de Condensador Behringer C-1U",
    precio: 149000,
    imagenes: ["resources/images/productos/Instrumentos/micro1.png"],
    descripcion: "El Behringer C-1U es un micrófono de condensador de alta calidad que es perfecto para grabar voces e instrumentos acústicos."
  },
  {
    id: 16,
    Codigo:"SON002",
    clase:"sonido",
    color:"Negro",
    nombre: "Audífonos de Estudio Beyerdynamic DT770 Pro",
    precio: 699000,
    imagenes: ["resources/images/productos/Instrumentos/audifonos1.jpg"],
    descripcion: "Los Beyerdynamic DT770 Pro son audífonos de estudio cerrados que ofrecen un sonido claro y preciso. Perfectos para músicos que necesitan escuchar su música con detalle en un entorno de estudio."
  },
  {
    id: 17,
    Codigo:"SON003",
    clase:"sonido",
    color:"Negro",
    nombre: "Monitores de Estudio Yamaha HS7",
    precio: 2399000,
    imagenes: ["resources/images/productos/Instrumentos/monitor1.webp"],
    descripcion: "Los Yamaha HS7 son monitores de estudio de campo cercano que ofrecen un sonido preciso y equilibrado. Perfectos para músicos que necesitan mezclar y masterizar su música."
  },
  {
    id: 18,
    Codigo:"",
    clase:"software",
    color:"Negro",
    nombre: "Software de Partituras Sibelius",
    precio: 399000,
    imagenes: ["resources/images/productos/Instrumentos/software1.png"],
    descripcion: "El Sibelius es un software de partituras que permite crear, editar e imprimir partituras musicales. Perfecto para compositores, arreglistas y estudiantes de música."
  },
  {
    id: 19,
    Codigo:"",
    clase:"teoria",
    color:"Negro",
    nombre: "Curso de Guitarra para Principiantes",
    precio: 199000,
    imagenes: ["resources/images/productos/Instrumentos/curso.webp"],
    descripcion: "El Curso de Guitarra para Principiantes es un curso completo que te enseñará a tocar la guitarra desde cero. Perfecto para personas que siempre han querido aprender a tocar la guitarra."
  },


  {
    id: 20,
    Codigo:"",
    clase:"teoria",
    color:"Negro",
    nombre: "Libro de Teoría Musical para Principiantes",
    precio: 89000,
    imagenes: ["resources/images/productos/Instrumentos/libro1.webp"],
    descripcion: "El Libro de Teoría Musical para Principiantes es un libro completo que te enseñará los conceptos básicos de la teoría musical. Perfecto para músicos que quieren aprender a leer y escribir música."
  },
  {
    id: 21,
   Codigo:"REP001G",
    clase:"repuestos",
   color:"Negro-Madera", 
   nombre: "Diapasón de Guitarra",
    precio: 98600,
    imagenes: ["resources/images/productos/Instrumentos/diapason1.webp"],
    descripcion: "El diapasón de guitarra es un accesorio esencial para cualquier guitarrista. Se utiliza para cambiar de tono y tocar diferentes acordes."
  },
  {
    id: 22,
    Codigo:"ACC007",
    clase:"accesorios",
    color:"Negro, Morado, Rosa, Azul",
    nombre: "Púa de Bajo Dunlop Tortex 1.14mm",
    precio: 5000,
    imagenes: ["resources/images/productos/Instrumentos/pua1.jpg"],
    descripcion: "La púa de bajo Dunlop Tortex 1.14mm es una púa gruesa y resistente que es perfecta para tocar el bajo eléctrico."
  },
  {
    id: 23,
    Codigo:"ACC008",
    clase:"accesorios",
    color:"Negro",
    nombre: "Correa de Guitarra Fender Nylon",
    precio: 39000,
    imagenes: ["resources/images/productos/Instrumentos/correa1.webp"],
    descripcion: "La correa de guitarra Fender Nylon es una correa cómoda y duradera que es perfecta para guitarristas de todos los niveles."
  },
  {
    id: 24,
    Codigo:"ACC009",
    clase:"accesorios",
    color:"Negro",
    nombre: "Capo Transpositor D'Addario Planet Waves NS Capo",
    precio: 49000,
    imagenes: ["resources/images/productos/Instrumentos/capo2.jpg"],
    descripcion: "El capo transpositor D'Addario Planet Waves NS Capo es un capo versátil que permite cambiar de tono en cualquier guitarra."
  },
  {
    id: 25,
    Codigo:"ACC0010",
    clase:"accesorios",
    color:"Negro",
    nombre: "Afinador de Guitarra Clip Korg Pitchclip 2",
    precio: 59000,
    imagenes: ["resources/images/productos/Instrumentos/afinador2.jpg"],
    descripcion: "El afinador de guitarra clip Korg Pitchclip 2 es un afinador preciso y fácil de usar que se engancha en la clavija de la guitarra."
  },
  {
    id: 26,
    Codigo:"ACC0011",
    clase:"accesorios",
    color:"Negro",
    nombre: "Soporte para Guitarra Hercules Stands GS0032B",
    precio: 99000,
    imagenes: ["resources/images/productos/Instrumentos/soporte1.jpg"],
    descripcion: "El soporte para guitarra Hercules Stands GS0032B es un soporte resistente y plegable que es perfecto para guardar tu guitarra de forma segura."
  },
  {
    id: 27,
    Codigo:"ACC0012",
    clase:"accesorios",
    color:"Negro",
    nombre: "Funda para Guitarra Gator G-PG-64 Deluxe",
    precio: 149000,
    imagenes: ["resources/images/productos/Instrumentos/funda1.jpg"],
    descripcion: "La funda para guitarra Gator G-PG-64 Deluxe es una funda acolchada y resistente que protege tu guitarra de golpes y arañazos."
  },
  {
    id: 28,
    Codigo:"AMP001B",
    clase:"amplificador",
    color:"Negro",
    nombre: "Amplificador de Bajo Ampeg BA-115",
    precio: 1990000,
    imagenes: ["resources/images/productos/Instrumentos/ampli2.jpg"],
    descripcion: "El Ampeg BA-115 es un amplificador de bajo potente y versátil que es perfecto para bajistas de todos los niveles."
  },
  {
    id: 29,
    Codigo:"INS001C",
    clase:"instrumento",
    color:"Negro",
    nombre: "Batería Electrónica Roland TD-1KPX",
    precio: 2499000,
    imagenes: ["resources/images/productos/Instrumentos/bateria2.webp"],
    descripcion: "La Roland TD-1KPX es una batería electrónica compacta y portátil que es perfecta para bateristas que quieren practicar en casa o tocar en espacios pequeños."
  },

  {
    id: 31,
    Codigo:"ACC0013",
    clase:"accesorios",
    color:"Negro, Morado, Rosa, Azul",
    nombre: "Plectro para Guitarra Acústica Dunlop 1.14mm",
    precio: 3000,
    imagenes: ["resources/images/productos/Instrumentos/pua2.webp"],
    descripcion: "Un plectro para guitarra acústica de Dunlop, hecho de material duradero y con un agarre cómodo."
  },
  {
    id: 32,
    Codigo:"ACC0014",
    clase:"accesorios",
    color:"Negro",
    nombre: "Soporte para Guitarra K&M 18820",
    precio: 199000,
    imagenes: ["resources/images/productos/Instrumentos/soporte2.webp"],
    descripcion: "Un soporte para guitarra de K&M, hecho de material resistente y ajustable a diferentes alturas."
  },
  {
    id: 33,
    Codigo:"ACC0015",
    clase:"accesorios",
    color:"Cafe(Interior:Rojo)",
    nombre: "Fundas para Instrumento Gator G-PG-60",
    precio: 149000,
    imagenes: ["resources/images/productos/Instrumentos/funda2.webp"],
    descripcion: "Una funda para instrumento de Gator, hecha de material impermeable y con acolchado para proteger tu instrumento."
  },
  {
    id: 34,
    Codigo:"REP001G",
    clase:"repuestos",
    color:"Madera",
    nombre: "Diapasón para Guitarra Fender American Standard",
    precio: 299000,
    imagenes: ["resources/images/productos/Instrumentos/diapason2.webp"],
    descripcion: "Un diapasón para guitarra Fender American Standard, hecho de madera de alta calidad y con un acabado impecable."
  },
  {
    id: 35,
    Codigo:"REP001G",
    clase:"repuestos",
    color:"Dorado, Plateado",
    nombre: "Cuerdas para Guitarra Eléctrica D'Addario NYXL0949",
    precio: 25000,
    imagenes: ["resources/images/productos/Instrumentos/cuerdas1.webp"],
    descripcion: "Un juego de cuerdas para guitarra eléctrica D'Addario NYXL0949, hechas de acero inoxidable y con un tono brillante."
  },
  {
    id: 36,
    Codigo:"REP001G",
    clase:"repuestos",
    color:"Dorado, Plateado",
    nombre: "Cuerdas para Guitarra Eléctrica D'Addario NYXL0949 (POR UNIDAD)",
    precio: 6000,
    imagenes: ["resources/images/productos/Instrumentos/cuerdas1.webp"],
    descripcion: "Un juego de cuerdas para guitarra eléctrica D'Addario NYXL0949, hechas de acero inoxidable y con un tono brillante."
  },
  {
    id: 37,
    Codigo:"ACC0016",
    clase:"accesorios",
    color:"Dorado",
    nombre: "Afinador de Guitarra Clip Korg Pitchclip 2",
    precio: 59000,
    imagenes: ["resources/images/productos/Instrumentos/afinador3.jpg"],
    descripcion: "Un afinador de guitarra clip Korg Pitchclip 2, que te permite afinar tu guitarra de forma rápida y precisa."
  },
  {
    id: 38,
    Codigo:"ACC0017",
    clase:"accesorios",
    color:"Negro",
    nombre: "Capo Planet Waves NS Deluxe",
    precio: 69000,
    imagenes: ["resources/images/productos/Instrumentos/capo3.jpg"],
    descripcion: "Un capo Planet Waves NS Deluxe, hecho de materiales de alta calidad y con un diseño ergonómico."
  },
  {
    id: 39,
    Codigo:"ACC0018",
    clase:"accesorios",
    color:"Azul, Negro, Rojo",
    nombre: "Púa Dunlop Tortex Flow 1.0mm",
    precio: 4000,
    imagenes: ["resources/images/productos/Instrumentos/pua.jpg"],
    descripcion: "Un púa Dunlop Tortex Flow 1.0mm, hecha de material flexible y con un agarre antideslizante."
  },
  {
    id: 40,
    Codigo:"ACC0019",
    clase:"accesorios",
    color:"Negro",
    nombre: "Soporte para Partituras Manfrotto MSB2311B",
    precio: 99000,
    imagenes: ["resources/images/productos/Instrumentos/atril.png"],
    descripcion: "Un soporte para partituras Manfrotto MSB231"
  },



  {
    id: 41,
    Codigo:"ACC020",
    clase:"accesorios",
    color:"Negro",
    nombre: "Soporte para Guitarra Hercules GS525B",
    precio: 199000,
    imagenes: ["resources/images/productos/Instrumentos/soporte.jpg"],
    descripcion: "El Hercules GS525B es un soporte para guitarra resistente y plegable que es perfecto para guardar tu guitarra de forma segura."
  },
  {
    id: 42,
    Codigo:"ACC021",
    clase:"Azul, Negro, Rojo",
    color:"Negro",
    nombre: "Púa de Bajo Dunlop Tortex 1.14mm",
    precio: 5000,
    imagenes: ["resources/images/productos/Instrumentos/pua.jpg"],
    descripcion: "La púa de bajo Dunlop Tortex 1.14mm es una púa duradera que ofrece un sonido brillante y definido. Perfecta para bajistas que necesitan tocar con fuerza."
  },
  {
    id: 43,
    Codigo:"ACC022",
    clase:"accesorios",
    color:"Negro",
    nombre: "Correa de Guitarra Fender Classic Monogram",
    precio: 79000,
    imagenes: ["resources/images/productos/Instrumentos/correa1.webp"],
    descripcion: "La correa de guitarra Fender Classic Monogram es una correa de cuero duradera y elegante que es perfecta para guitarristas de todos los niveles."
  },
  {
    id: 44,
    Codigo:"ACC023",
    clase:"accesorios",
    color:"Negro",
    nombre: "Capo de Guitarra Dunlop Ultimate Capo",
    precio: 69000,
    imagenes: ["resources/images/productos/Instrumentos/capo.jpg"],
    descripcion: "El Dunlop Ultimate Capo es un capo versátil y fácil de usar que se adapta a una amplia gama de guitarras. Perfecto para guitarristas que necesitan cambiar rápidamente de tono."
  },
  {
    id: 45,
    Codigo:"ACC024",
    clase:"accesorios",
    color:"Negro",
    nombre: "Afinador de Guitarra Planet Waves NS Clip-On",
    precio: 34000,
    imagenes: ["resources/images/productos/Instrumentos/afinador.jpg"],
    descripcion: "El Planet Waves NS Clip-On es un afinador de guitarra preciso y fácil de usar que se engancha en el clavijero de tu guitarra. Perfecto para guitarristas que necesitan afinar su guitarra rápidamente y en silencio."
  },
  {
    id: 46,
    Codigo:"ACC025",
    clase:"accesorios",
    color:"Blanco",
    nombre: "Metrónomo Digital Korg TM-60",
    precio: 49000,
    imagenes: ["resources/images/productos/Instrumentos/metronomo.jpg"],
    descripcion: "El Korg TM-60 es un metrónomo digital preciso y versátil que ofrece una amplia gama de funciones y ritmos. Perfecto para músicos que necesitan practicar con un ritmo constante."
  },
  {
    id: 47,
    Codigo:"ACC026",
    clase:"accesorios",
    color:"Negro",
    nombre: "Pedalera Multiefectos Boss GT-100",
    precio: 1249000,
    imagenes: ["resources/images/productos/Instrumentos/pedalera.webp"],
    descripcion: "El Boss GT-100 es una pedalera multiefectos que ofrece una amplia gama de efectos y sonidos. Perfecto para guitarristas que buscan experimentar con diferentes sonidos."
  },
  {
    id: 48,
    Codigo:"SON004",
    clase:"sonido",
    color:"Azul",
    nombre: "Interface de Audio PreSonus AudioBox USB 96",
    precio: 449000,
    imagenes: ["resources/images/productos/Instrumentos/interface.jpg"],
    descripcion: "La PreSonus AudioBox USB 96 es una interfaz de audio de alta calidad que permite grabar y reproducir audio en un ordenador. Perfecta para músicos que quieren crear música en casa."
  },
  {
    id: 49,
    Codigo:"SON005",
    clase:"sonido",
    color:"Negro",
    nombre: "Interface de Audio",
    precio: 300000,
    imagenes: ["resources/images/productos/Instrumentos/inter.jpg"],
    descripcion: " una interfaz de audio de alta calidad que permite grabar y reproducir audio en un ordenador."
  },
    
];


const productosPorPagina = 15;
  let paginaActual = 1;
  const carrito = [];

  // Función para formatear precios
  function formatearPrecio(precio) {
    return precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  }

  function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');
  
    carritoLista.innerHTML = '';
    let total = 0;
  
    carrito.forEach(producto => {
      const carritoItem = document.createElement('li');
  
      const nombrePrecioElement = document.createElement('span');
      nombrePrecioElement.innerHTML = `<strong>${producto.nombre}</strong> - <span class="precio">${formatearPrecio(producto.precio)}</span>`;
  
      const eliminarButton = document.createElement('button');
      eliminarButton.textContent = 'Eliminar';
      eliminarButton.addEventListener('click', () => {
        eliminarDelCarrito(producto);
      });
  
      carritoItem.appendChild(nombrePrecioElement);
      carritoItem.appendChild(document.createElement('br')); 
      carritoItem.appendChild(eliminarButton);
      
  
      carritoLista.appendChild(carritoItem);
      total += producto.precio;
    });
  
    carritoTotal.textContent = `Total: ${formatearPrecio(total)}`;
  }
  
  function eliminarDelCarrito(producto) {
    const index = carrito.indexOf(producto);
    if (index !== -1) {
      carrito.splice(index, 1);
      actualizarCarrito();
    }
  }

  function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
  }

  function mostrarPagina(pagina) {
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productos.slice(inicio, fin);

    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = '';

    productosPagina.forEach(producto => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('producto');

      const imagenElement = document.createElement('img');
      imagenElement.src = producto.imagenes[0];
      imagenElement.alt = producto.nombre;

      const nombreElement = document.createElement('h3');
      nombreElement.textContent = producto.nombre;

      const precioElement = document.createElement('p');
      precioElement.textContent = `Precio: ${formatearPrecio(producto.precio)}`;

      const descripcionElement = document.createElement('p');
      descripcionElement.textContent = producto.descripcion;

      const colorElement = document.createElement('p');
      colorElement.textContent = 'Color: '+producto.color;

      const agregarButton = document.createElement('button');
      agregarButton.textContent = 'Agregar al Carrito';
      agregarButton.addEventListener('click', () => {
        agregarAlCarrito(producto);
      });

      productoElement.appendChild(imagenElement);
      productoElement.appendChild(nombreElement);
      productoElement.appendChild(precioElement);
      if (producto.clase !== "software" && producto.clase!=="teoria") {
        const colorElement = document.createElement('p');
        colorElement.textContent = 'Color: ' + producto.color;
        productoElement.appendChild(colorElement);
      }
      
      productoElement.appendChild(descripcionElement);
      productoElement.appendChild(agregarButton);

      productosContainer.appendChild(productoElement);
    });
  }

  function mostrarPaginacion() {
    const paginacionContainer = document.getElementById('paginacion-container');
    paginacionContainer.innerHTML = '';
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      if (i === paginaActual) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => {
        paginaActual = i;
        mostrarPagina(paginaActual);
        mostrarPaginacion();
      });
      paginacionContainer.appendChild(button);
    }
  }

  function vaciarCarrito() {
    carrito.length = 0; // Vaciar el arreglo del carrito
    actualizarCarrito(); // Actualizar la visualización del carrito
    mostrarAvisoCompra(); // Mostrar el aviso de compra
  }

  function mostrarAvisoCompra() {
    alert("¡Compra realizada con éxito! Gracias por su compra");
  }

  // Event listener para el botón "Comprar"
  const comprarButton = document.getElementById('comprar-button');
  comprarButton.addEventListener('click', vaciarCarrito);

  // Mostrar los productos al cargar la página
  mostrarPagina(paginaActual);
  mostrarPaginacion();

  // Manejar el envío del formulario
  const nuevoProductoForm = document.getElementById('nuevo-producto-form');
  let errorCount = 0;
  nuevoProductoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const clase = document.getElementById('clase').value;
    const codigo = document.getElementById('codigo').value;
    const verificacionclase = clase.toLowerCase();
  
    if(verificacionclase!="instrumento"&& verificacionclase!="accesorios"&& verificacionclase!="repuestos"&& verificacionclase!="software"&& verificacionclase!="teoria"&& verificacionclase!="sonido"&& verificacionclase!="amplificador"&& verificacionclase!="microfonos"){
alert("La opción introducida no es valida \nLas opciones validas son: \nInstrumento\nAccesorios\nRepuestos\nSoftware\nTeoria\nSonido\nAmplificador\nMicrofonos");
errorCount++;
    
    }
  
    const nombre = document.getElementById('nombre').value;
    const longitudNombre = nombre.length;
    if(longitudNombre>20){
      alert("El nombre no puede superar los 20 caracteres.")
      errorCount++;
    }
    const color = document.getElementById('color').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const nombreImagen = document.getElementById('imagenes').value.trim();
    const directorio = 'resources/images/productos/Instrumentos/'; 
    const rutaCompleta = directorio + nombreImagen;
    const imagenes = [rutaCompleta];
    const descripcion = document.getElementById('descripcion').value;

    if(errorCount<1){
    const nuevoProducto = {
      id: productos.length + 1,
      codigo,
      clase,
      nombre,
      color,
      precio,
      imagenes,
      descripcion
    };

    productos.push(nuevoProducto);
    mostrarPagina(paginaActual);
    mostrarPaginacion();
    nuevoProductoForm.reset();
    alert("Se agrego el producto mi papacho :D");
}
else{
  alert("Se redigira a la pagina de instrucciones para que entienda mejor el funcionamiento de la pagina");
  window.location.href = "instrucciones.html";}

  });
                        
});

