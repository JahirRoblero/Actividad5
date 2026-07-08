let campoNombreAlumno = document.getElementById("nombreAlumno");
let campoNumeroControl = document.getElementById("numeroControl");
let campoFechaNacimiento = document.getElementById("fechaNacimiento");

let nombreLabel = document.getElementById("nombre-label");
let controlLabel = document.getElementById("n-control");
let fechaLabel = document.getElementById("f-nacimiento");

let formValidarAlumno = document.getElementById("formValidarAlumno");

function validarNumeroControl(valor) {
    if (!/^\d+$/.test(valor)) return false;
    return valor.length === 6 && ValidarLongitud(valor, 6);
}

campoNombreAlumno.addEventListener("blur", function () {
    let esValido = soloLetras(this.value) && this.value.trim() !== "";
    nombreLabel.style.display = esValido ? "none" : "inline";
});

campoNumeroControl.addEventListener("blur", function () {
    let esValido = validarNumeroControl(this.value);
    controlLabel.style.display = esValido ? "none" : "inline";
});

campoFechaNacimiento.addEventListener("blur", function () {
    let esValido = this.value !== "";
    fechaLabel.style.display = esValido ? "none" : "inline";
});

formValidarAlumno.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombreOk = soloLetras(campoNombreAlumno.value) && campoNombreAlumno.value.trim() !== "";
    let controlOk = validarNumeroControl(campoNumeroControl.value);
    let fechaOk = campoFechaNacimiento.value !== "";

    nombreLabel.style.display = nombreOk ? "none" : "inline";
    controlLabel.style.display = controlOk ? "none" : "inline";
    fechaLabel.style.display = fechaOk ? "none" : "inline";

    if (nombreOk && controlOk && fechaOk) {
        let esMayor = esMayorDeEdad(campoFechaNacimiento.value);
        mostrarModalEdad(campoNombreAlumno.value, campoFechaNacimiento.value, esMayor);
    }
});

function mostrarModalEdad(nombre, fechaNacimiento, esMayor) {
    let edad = calcularEdad(fechaNacimiento);

    Swal.fire({
        icon: esMayor ? "success" : "warning",
        title: "Datos validados correctamente",
        html: `Edad calculada: <b>${edad} años</b>.<br>` +
              (esMayor
                ? "El usuario es mayor de edad."
                : "El usuario es menor de edad."),
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2563EB"
    });
}