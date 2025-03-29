function agregarAlCarrito(producto) {
    idProducto= producto.id;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoNuevo = productos.find(p => p.id === idProducto);
    
    if (productoNuevo) {
        carrito.push(productoNuevo);
        console.log(carrito)
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert(`Agregaste ${productoNuevo.marca} ${productoNuevo.modelo} al carrito`);
    } else {
        alert('Producto no encontrado');
    }
}

