function mostrarMensaje() {
    alert("Hola Nayra 😊 Este proyecto está funcionando correctamente!");
}
function actualizarFecha() {
    const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    const ahora = new Date();
    const fechaTexto = `📅 Hoy es ${dias[ahora.getDay()]}, ${ahora.getDate()} de ${meses[ahora.getMonth()]} de ${ahora.getFullYear()}`;
    document.getElementById("fecha").innerText = fechaTexto;
}

actualizarFecha();

const anioActual = new Date().getFullYear();
document.getElementById("anio").innerText = anioActual;

function mostrarBienvenida(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const mensaje = document.getElementById("mensajeLogin");

    mensaje.innerText = "Bienvenido, " + usuario + " 👋";
    mensaje.classList.add("mostrar");

    document.getElementById("textoSaludo").innerText =
        "🌸 Hola " + usuario + " 💖";
}

mostrarBienvenida();