function mostrar(tema){

    let contenido = document.getElementById("contenido");

    if(tema == "versiones"){

        contenido.innerHTML = `

        <h2>Control de Versiones</h2>

        <p>
        Permite guardar cambios en proyectos.
        </p>

        <ul>
            <li>Repositorio</li>
            <li>Ramas</li>
            <li>Merge</li>
            <li>.gitignore</li>
        </ul>
        `;
    }

    else if(tema == "fundamentos"){

        contenido.innerHTML = `

        <h2>Fundamentos</h2>

        <p>
        Son las bases de programación.
        </p>

        <ul>
            <li>Variables</li>
            <li>Funciones</li>
            <li>Parámetros</li>
            <li>Tipos de datos</li>
        </ul>
        `;
    }

    else if(tema == "estructuras"){

        contenido.innerHTML = `

        <h2>Estructuras de Datos</h2>

        <ul>
            <li>Arreglos</li>
            <li>Listas</li>
            <li>Diccionarios</li>
            <li>Ciclos</li>
        </ul>
        `;
    }

    else if(tema == "pensamiento"){

        contenido.innerHTML = `

        <h2>Pensamiento Computacional</h2>

        <ul>
            <li>Descomposición</li>
            <li>Patrones</li>
            <li>Abstracción</li>
            <li>Algoritmos</li>
        </ul>
        `;
    }

    else if(tema == "apps"){

        contenido.innerHTML = `

        <h2>Desarrollo de Apps</h2>

        <ul>
            <li>Construcción</li>
            <li>Pruebas</li>
            <li>Despliegue</li>
        </ul>
        `;
    }

    else if(tema == "uml"){

        contenido.innerHTML = `

        <h2>UML y Requerimientos</h2>

        <ul>
            <li>Requerimientos</li>
            <li>Requisitos</li>
            <li>UML</li>
            <li>Navegación Web</li>
        </ul>
        `;
    }
}