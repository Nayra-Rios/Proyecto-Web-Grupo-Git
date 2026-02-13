function mostrarMensaje() {
    alert("Hola Nayra 😊 Este proyecto está funcionando correctamente!");
}
<script>
        function actualizarFecha() {
            const hoy = new Date();
            document.getElementById("fecha").innerText = hoy.toLocaleDateString();
        }

        actualizarFecha();
</script>
