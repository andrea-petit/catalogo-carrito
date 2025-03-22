document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simula una base de datos de usuarios
    const users = [
        { username: 'admin', password: 'admin123' },
        { username: 'user', password: 'user123' }
    ];

    // Verifica si el usuario y la contraseña coinciden
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirige a la página de ventas (cambia la URL por la correcta)
        window.location.href = 'pagina_de_ventas.html';
    } else {
        // Muestra un mensaje de error
        document.getElementById('errorMessage').textContent = 'Usuario o contraseña incorrectos';
    }
});