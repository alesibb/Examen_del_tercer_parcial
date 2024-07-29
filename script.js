document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('person-form');
    const listaPersonas = document.getElementById('lista-personas');
    const listaMayores = document.getElementById('lista-mayores');
    const filtrarButton = document.getElementById('filtrar');

    let personas = [];

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;

        if (nombre && edad) {
            const persona = { nombre, edad: parseInt(edad) };
            personas.push(persona);
            agregarPersonaALista(persona, listaPersonas);
            form.reset();
        }
    });

    filtrarButton.addEventListener('click', function () {
        const mayores = filtrarMayoresDeEdad(personas);
        listaMayores.innerHTML = '';
        mayores.forEach(persona => agregarPersonaALista(persona, listaMayores));
    });

    function agregarPersonaALista(persona, lista) {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} - ${persona.edad} años`;
        lista.appendChild(li);
    }

    function filtrarMayoresDeEdad(personas) {
        return personas.filter(persona => persona.edad >= 18);
    }
});
