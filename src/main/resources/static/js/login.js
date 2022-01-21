$(document).ready(function () {
    // on ready
});

async function iniciarSesion() {

    let datos = {};

    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPass').value;

    const request = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const response = await request.text();
    if (response != 'fallo') {
        localStorage.token = response;
        localStorage.email = datos.email;
        window.location.href = 'usuarios.html'
    } else {
        alert('credenciales incorrectas')
    }
}


