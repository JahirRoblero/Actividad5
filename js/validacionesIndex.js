let campoNombreAlumno = document.getElementById("nombreAlumno");
let campoNumeroControl = document.getElementById("numeroControl");
let campoFechaNacimiento = document.getElementById("fechaNacimiento");
let campoCorreo = document.getElementById("correo");
let campoContraseña = document.getElementById("contraseña");

let nombreLabel = document.getElementById("nombre-label");
let controlLabel = document.getElementById("n-control");
let fechaLabel = document.getElementById("f-nacimiento");
let nombreUsuario2 = document.getElementById("nombreUsuario2");
let correoElectronico =  document.getElementById("correoElectronico");
let contraseñaLabel = document.getElementById("contraseñaLabel");

let campoNombreUsuarioCaptura = document.getElementById("nombreUsuarioCaptura");

let formValidarAlumno = document.getElementById("formValidarAlumno");
let formCapturaUsuario = document.getElementById("formCapturaUsuario");

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
    let esValido = fechaReal(this.value);
    fechaLabel.style.display = esValido ? "none" : "inline";
});

campoNombreUsuarioCaptura.addEventListener("blur", function(){
    let esValido = soloLetras(this.value) && this.value.trim() !== "";

    if(this.value.trim() === ""){
        nombreUsuario2.innerHTML = "Campos vacios";
        nombreUsuario2.style.display = "inline";
        return;
    }
    nombreUsuario2.innerHTML ="Escribe un nombre valido";
    nombreUsuario2.style.display = esValido ? "none" : "inline";
});

campoCorreo.addEventListener("blur", function(){
    let esValido = validarCorreo(this.value) && this.value.trim() !== "";

    if(this.value.trim() === ""){
        correoElectronico.innerHTML = "Campos vacios";
        correoElectronico.style.display = "inline";
        return;
    }
    correoElectronico.innerHTML = "Correo invalido";
    correoElectronico.style.display = esValido ? "none" : "inline";
});

campoContraseña.addEventListener("blur", function() {
    let esValido = validarPassword(this.value) && this.value.trim() != "";
    contraseñaLabel.style.display = esValido ? "none" : "inline";
});


formValidarAlumno.addEventListener("submit", function (e) {
    e.preventDefault();

    let nombreOk = soloLetras(campoNombreAlumno.value) && campoNombreAlumno.value.trim() !== "";
    let controlOk = validarNumeroControl(campoNumeroControl.value);
    let fechaOk = fechaReal(campoFechaNacimiento.value);

    nombreLabel.style.display = nombreOk ? "none" : "inline";
    controlLabel.style.display = controlOk ? "none" : "inline";
    fechaLabel.style.display = fechaOk ? "none" : "inline";

    if (nombreOk && controlOk && fechaOk) {
        let esMayor = esMayorDeEdad(campoFechaNacimiento.value);
        mostrarModalEdad(campoNombreAlumno.value, campoFechaNacimiento.value, esMayor);
    }
});


formCapturaUsuario.addEventListener("submit", function(e){
    e.preventDefault();

    let nombreOk = soloLetras(campoNombreUsuarioCaptura.value) && campoNombreUsuarioCaptura.value.trim() != "";
    let correoOk = validarCorreo(campoCorreo.value) && campoCorreo.value.trim() != "";
    let contraseñaOk = validarPassword(campoContraseña.value) && campoContraseña.value.trim() != "";

     nombreUsuario2.style.display = nombreOk ? "none" : "inline";
    correoElectronico.style.display = correoOk ? "none" : "inline";
    contraseñaLabel.style.display = contraseñaOk ? "none" : "inline";

     if(nombreOk && correoOk && contraseñaOk){
        Swal.fire({
            icon: "success",
            title: "Usuario capturado correctamente",
            html: `
                <p style="color:black;">El usuario <b>${campoNombreUsuarioCaptura.value}</b> fue registrado con éxito.</p>
                <p style="color:black;">Correo: <b>${campoCorreo.value}</b></p>
            `,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#2563eb",
            background: "#f8fafc",
            color: "#0f172a",
            iconColor: "#16a34a",
            timer: 3000,
            timerProgressBar: true
        });
    }
    
})

function mostrarModalEdad(nombre, fechaNacimiento, esMayor) {
    let edad = calcularEdad(fechaNacimiento);

    Swal.fire({
        icon: "success",
        title: "Datos validados correctamente",
        html: `Edad calculada: <b>${edad} años</b>.<br>` +
              (esMayor
                ? "El usuario es mayor de edad."
                : "El usuario es menor de edad."),
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#2563EB",
        
    });
}




function fechaReal(fechaTexto) {
    if (!fechaTexto) return false;

    let fecha = new Date(fechaTexto);
    let hoy = new Date();

    if (isNaN(fecha.getTime())) return false;  
    if (fecha > hoy) return false;               

    let edadMaxima = 120;
    let fechaLimite = new Date();
    fechaLimite.setFullYear(hoy.getFullYear() - edadMaxima);
    if (fecha < fechaLimite) return false;        // demasiado antigua

    return true;
}