let contador = 0;
let intervaloEscritura;

/* MENSAJE BOTÓN */
function mostrarMensaje() {
    const texto = "¡Gracias por hacer clic! 🚀";
    const elemento = document.getElementById("mensaje");

    clearInterval(intervaloEscritura);
    let i = 0;

    intervaloEscritura = setInterval(() => {
        elemento.innerText = texto.slice(0, i);
        i++;
        if (i > texto.length) clearInterval(intervaloEscritura);
    }, 50);
}

/* FECHA */
function actualizarFecha() {
    const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

    const ahora = new Date();

    const fechaTexto = `📅 Hoy es ${dias[ahora.getDay()]}, ${ahora.getDate()} de ${meses[ahora.getMonth()]} de ${ahora.getFullYear()}`;

    document.getElementById("fecha").innerText = fechaTexto;
}

actualizarFecha();

/* AÑO FOOTER */
document.getElementById("anio").innerText =
    new Date().getFullYear();

/* RELOJ */
function actualizarReloj() {
    document.getElementById("reloj").innerText =
        new Date().toLocaleTimeString();
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

/* CONTADOR */
function contarClicks() {
    contador++;

    const elemento = document.getElementById("contador");
    elemento.innerText = "Has hecho " + contador + " clics";

    elemento.classList.add("animar");
    setTimeout(() => elemento.classList.remove("animar"), 200);

    if (contador >= 10) {
        elemento.style.color = "red";
        elemento.innerText += " 🔥 ¡Eres imparable!";
    } else if (contador >= 5) {
        elemento.style.color = "orange";
    } else {
        elemento.style.color = "black";
    }
    if (contador >= 15) {
    elemento.innerText += " 💎 Nivel experta desbloqueado!";
    }
}

function resetContador() {
    contador = 0;
    const elemento = document.getElementById("contador");
    elemento.innerText = "Has hecho 0 clics";
    elemento.style.color = "black";
}

/* SALUDO SEGÚN HORA */
const hora = new Date().getHours();
let saludo;
let mensaje;

if (hora < 12) {
    saludo = "☀️ Buenos días";
    mensaje = "¡Hora de brillar con los commits!";
} else if (hora < 18) {
    saludo = "🌤️ Buenas tardes";
    mensaje = "¡A seguir aprendiendo y programando!";
} else {
    saludo = "🌙 Buenas noches";
    mensaje = "¡Tiempo de descansar y soñar con código!";
}

document.getElementById("saludo").innerText =
    saludo + " — " + mensaje;

/* BIENVENIDA */
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

/* HORA FOOTER */
function actualizarHoraFooter() {
    document.getElementById("horaFooter").innerText =
        "Hora actual: " + new Date().toLocaleTimeString();
}

setInterval(actualizarHoraFooter, 1000);
actualizarHoraFooter();
