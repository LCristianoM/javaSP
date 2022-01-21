// Call the dataTables jQuery plugin
$(document).ready(function () {
    // on ready
});

async function registrarUsuarios() {

    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPass').value;

    let repetirPass = document.getElementById('txtPassTwo').value;

    if (repetirPass != datos.password) {
        alert('Las contraseñas no coiciden');
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    alert('Cuenta creada exitosamente');
    window.location.href = 'login.html';
}


