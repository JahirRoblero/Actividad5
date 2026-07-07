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