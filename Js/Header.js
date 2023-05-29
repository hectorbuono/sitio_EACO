// Crear el elemento de encabezado
var header = document.createElement('header');

// Crear el elemento de logotipo
var logo = document.createElement('img');
logo.src = 'Img/logo.png';
logo.alt = 'Logo de mi sitio web';

// Crear el elemento de menú
var menu = document.createElement('nav');
// Agrega aquí los elementos del menú, como enlaces <a> o elementos <ul> y <li>
<ul>
<li><a href="#seccion-2">EQUIPO</a>

<ul>

   <li><a href="#La_Lampalagua">LOGO</a></li>

   <li><a href="#seccion-4">INTEGRANTES</a></li>

  </ul>

</li>


<li><a href="#">INVESTIGACIÓN</a>

  <ul>

       <li><a href="Ambato.html">AMBATO</a></li>

   <li><a href="El_Alto.html">EL ALTO</a></li>

  </ul>

</li>


<li><a href="#">PROYECTOS</a>

   <ul>


     <li><a href="#">UBA</a></li>

     <li><a href="#">CONICET</a></li>

     <li><a href="#">MINCYT</a></li>

     </ul>

  </li>


<li><a href="#">PUBLICACIONES</a>

   <ul>

       <li><a href="#">TESIS</a></li>

       <li><a href="#">LIBROS</a></li>

       <li><a href="#">CAPÍTULOS<br> DE LIBRO</a></li>

       <li><a href="#">ARTÍCULOS</a></li>

       <li><a href="#">CONGRESOS</a></li>

   </ul>

</li>   

<li><a href="#">CONTACTO</a></li>

<li><a href="#">ENTRAR</a></li>

</ul>

// Agregar el logotipo y el menú al encabezado
header.appendChild(logo);
header.appendChild(menu);

// Agregar el encabezado a la página
document.body.insertBefore(header, document.body.firstChild);