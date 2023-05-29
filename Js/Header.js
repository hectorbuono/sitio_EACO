document.addEventListener('DOMContentLoaded', function() {

// Crear el elemento de encabezado
var header = document.createElement('header');

// Crear el elemento de logotipo
var logo = document.createElement('img');
logo.src = 'Img/Logo (INES)-chica.png';
logo.alt = 'Logo de mi sitio web';

// Crear el elemento de menú
var menu = document.createElement('nav');
// Agrega aquí los elementos del menú, como enlaces <a> o elementos <ul> y <li>
var menuItem1 = document.createElement('li');
  var menuItemLink1 = document.createElement('a');
  menuItemLink1.textContent = 'Inicio';
  menuItemLink1.href = 'index.html'; // Ruta a la página de inicio
  menuItem1.appendChild(menuItemLink1);
var menuItem2 = document.createElement('li');
  var menuItemLink2 = document.createElement('a');
  menuItemLink2.textContent = 'Equipo';
  menuItemLink2.href = 'index.html#El_Equipo';  
  menuItem2.appendChild(menuItemLink2);
  // Crear el submenú para el elemento "Equipo"
  var subMenu = document.createElement('ul');
  var subMenuItem1 = document.createElement('li');
  var subMenuItemLink1 = document.createElement('a');
  subMenuItemLink1.textContent = 'Logo';
  subMenuItem1.appendChild(subMenuItemLink1);
  subMenu.appendChild(subMenuItem1);
  menuItem2.appendChild(subMenu);
// Agregar el logotipo y el menú al encabezado
header.appendChild(logo);
header.appendChild(menu);
menu.appendChild(menuItem1);
menu.appendChild(menuItem2);
//menu.appendChild(menuItem3);
// Agregar el encabezado a la página
document.body.insertBefore(header, document.body.firstChild);
});