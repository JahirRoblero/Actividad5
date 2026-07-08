function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");

  sidebar.classList.toggle("activo");
}

function toggleSubmenuUsuarios() {
  const submenu = document.getElementById("submenuUsuarios");
  const flecha = document.getElementById("flechaUsuarios");

  submenu.classList.toggle("activo");

  if (submenu.classList.contains("activo")) {
    flecha.textContent = "▲";
  } else {
    flecha.textContent = "▼";
  }
}

function mostrarApartado(apartado) {
  const bienvenida = document.getElementById("bienvenida");
  const formCapturaUsuario = document.getElementById("formCapturaUsuario");
  const formValidarAlumno = document.getElementById("formValidarAlumno");
  const titulo = document.querySelector("header h1");

  bienvenida.classList.add("oculto");
  formCapturaUsuario.classList.add("oculto");
  formValidarAlumno.classList.add("oculto");

  if (apartado === "captura") {
    formCapturaUsuario.classList.remove("oculto");
    titulo.textContent = "Captura de usuarios";
  }

  if (apartado === "alumnos") {
    formValidarAlumno.classList.remove("oculto");
    titulo.textContent = "Validar alumnos";
  }

  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("activo");
}


/**PARA QUE APARESCA EL USUARIO */
let nombreUsuario = document.getElementById("nombreUsuario");
let usuarioActivo = sessionStorage.getItem("usuarioActivo");

if (usuarioActivo) {
    nombreUsuario.textContent = usuarioActivo;
} else {
    window.location.href = "login.html";
}

let usuarioDropdown = document.getElementById("usuarioDropdown");
let usuarioBtn = document.getElementById("usuarioBtn");

usuarioBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    usuarioDropdown.classList.toggle("abierto");
});

document.addEventListener("click", function () {
    usuarioDropdown.classList.remove("abierto");
});

let btnSalir = document.getElementById("btnSalir");

btnSalir.addEventListener("click", function () {
    sessionStorage.removeItem("usuarioActivo");
    window.location.href = "login.html";
});