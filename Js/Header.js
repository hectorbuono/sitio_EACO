document.addEventListener('DOMContentLoaded', function() {

// Crear el elemento de encabezado
var header = document.createElement('header');

// Crear el elemento de logotipo
var logo = document.createElement('img');
logo.src = 'Img/Logo_transparente.png';
logo.alt = 'Logo de mi sitio web';

// Crear el elemento de menú
var menu = document.createElement('nav');
// Agrega aquí los elementos del menú, como enlaces <a> o elementos <ul> y <li>
var menu = document.createElement('ul');
var menuItem1 = document.createElement('li');
menuItem1.textContent = 'Inicio';
var menuItem2 = document.createElement('li');
menuItem2.textContent = 'Acerca de';
var menuItem3 = document.createElement('li');
menuItem3.textContent = 'Contacto';

// Agregar el logotipo y el menú al encabezado
header.appendChild(logo);
header.appendChild(menu);
menu.appendChild(menuItem1);
menu.appendChild(menuItem2);
menu.appendChild(menuItem3);
// Agregar el encabezado a la página
document.body.insertBefore(header, document.body.firstChild);
});