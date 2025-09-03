// Funciones para abrir y cerrar modales
function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modales = document.querySelectorAll(".modal");
    modales.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};