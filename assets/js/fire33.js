document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar las publicaciones en la página
    function renderPosts() {
        // Código para renderizar las publicaciones...
    }

    // Obtener referencia al formulario de inicio de sesión
    const loginForm = document.getElementById("login-form");

    // Evento para iniciar sesión
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = loginForm.querySelector("#email").value;
        const password = loginForm.querySelector("#password").value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Limpiar el formulario después de iniciar sesión
                loginForm.reset();
                console.log("Inicio de sesión exitoso");
            })
            .catch((error) => {
                console.error("Error al iniciar sesión:", error);
            });
    });

    // Obtener referencia al botón de cerrar sesión
    const logoutButton = document.getElementById("logout");

    // Evento para cerrar sesión
    logoutButton.addEventListener("click", function() {
        firebase.auth().signOut()
            .then(() => {
                console.log("Sesión cerrada correctamente");
            })
            .catch((error) => {
                console.error("Error al cerrar sesión:", error);
            });
    });

    // Observador de cambios de autenticación de Firebase
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("Usuario autenticado:", user.email);
            // Mostrar contenido para usuarios autenticados
        } else {
            console.log("Usuario no autenticado");
            // Mostrar contenido para usuarios no autenticados
        }
    });
});
