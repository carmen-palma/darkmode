const body = document.body;
const darkModeSwitch = document.querySelector('.dark-mode-switch');

const usuarioPrefiereOscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (usuarioPrefiereOscuro) {
  habilitarModoOscuro();
}


function habilitarModoOscuro() {
  body.classList.add('dark-mode');
  darkModeSwitch.classList.add('active');
  guardarPreferenciaModo('oscuro');
}


function deshabilitarModoOscuro() {
  body.classList.remove('dark-mode');
  darkModeSwitch.classList.remove('active');
  guardarPreferenciaModo('claro');
}

function toggleModoOscuro() {
  if (body.classList.contains('dark-mode')) {
    deshabilitarModoOscuro();
  } else {
    habilitarModoOscuro();
  }
}


function guardarPreferenciaModo(modo) {
  localStorage.setItem('modo-preferido', modo);
}

darkModeSwitch.addEventListener('click', toggleModoOscuro);

const modoPreferido = localStorage.getItem('modo-preferido');
if (modoPreferido === 'oscuro') {
  habilitarModoOscuro();
}