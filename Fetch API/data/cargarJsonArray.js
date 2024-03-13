const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');
cargarJsonArrayBtn.addEventListener('click',obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url).then(respuesta=>respuesta.json())
                .then(resultado=>mostrarHTML(resultado))
}

function mostrarHTML(empleados) {
    //console.log(empleado);
    const contenido = document.querySelector('.contenido');
    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        html += `
        <p>Empleado: ${nombre}</p>
        <p>Dd: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabjo: ${trabajo}</p>
        `
    });

    contenido.innerHTML = html;
    
}