function mostrarMensaje() {
    alert("Hola Nayra 😊 Este proyecto está funcionando correctamente!");
}
function actualizarFecha() {
    const hoy = new Date();
    document.getElementById("fecha").innerText = hoy.toLocaleDateString();
}

actualizarFecha();

const anioActual = new Date().getFullYear();
document.getElementById("anio").innerText = anioActual;