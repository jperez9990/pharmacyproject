document.getElementById("buscar").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let productos = document.querySelectorAll(".producto");

    productos.forEach(prod => {
        let texto = prod.textContent.toLowerCase();
        prod.style.display = texto.includes(filtro) ? "" : "none";
    });
});