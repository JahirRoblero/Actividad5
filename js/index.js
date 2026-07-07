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