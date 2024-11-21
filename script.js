function welcomeUser() {
    var name = document.getElementById("name").value;
    if (name) {
        document.getElementById("welcome-message").innerHTML = `¡Bienvenido, ${name}!`;
    } else {
        document.getElementById("welcome-message").innerHTML = `¡Bienvenido, visitante!`;
    }
}
