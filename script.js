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

function mostrarBienvenida() {
    const texto = "✨ Bienvenid@ al Proyecto Web de las Girls! ✨";
    const elemento = document.getElementById("bienvenida");
    let i = 0;
    const intervalo = setInterval(() => {
        elemento.innerText = texto.slice(0, i);
        i++;
        if (i > texto.length) clearInterval(intervalo);
    }, 60);
}

mostrarBienvenida();