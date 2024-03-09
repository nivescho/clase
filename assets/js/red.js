// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFkZNk_z2RaIlABXXlGoMCnqAQXi9UG2E",
    authDomain: "prueba-firebase-f8bc8.firebaseapp.com",
    projectId: "prueba-firebase-f8bc8",
    storageBucket: "prueba-firebase-f8bc8.appspot.com",
    messagingSenderId: "540400810689",
    appId: "1:540400810689:web:5ab360685364090654b240",
    measurementId: "G-NVDN6HDZCK"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al formulario de registro
    const signupForm = document.getElementById("signup-form");

    // Evento para registrar un nuevo usuario
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = signupForm.querySelector("#email").value;
        const password = signupForm.querySelector("#password").value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Limpiar el formulario después de crear la cuenta
                signupForm.reset();
                console.log("Usuario creado correctamente");
            })
            .catch((error) => {
                console.error("Error al crear la cuenta:", error);
            });
    });

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

