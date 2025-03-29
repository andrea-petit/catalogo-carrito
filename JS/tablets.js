const contenedorTarjetas = document.getElementById("producto-container");
 
function CrearTarjetaProductosInicio(productos){
     productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div")
        nuevoArticulo.classList = "tarjeta-producto";
        nuevoArticulo.innerHTML = `
        <img src=${producto.foto}>
        <h3>${producto.marca}</h3>
        <h3>${producto.modelo}</h3>
        <hr>
        <p>Precio: $ ${producto.precio} </p>
        <button>Agregar al Carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto));
        
     });
}

CrearTarjetaProductosInicio(tablets);