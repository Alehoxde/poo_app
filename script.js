function mostrarTema(tema){

    let contenido = document.getElementById("contenido");

    if(tema == "versiones"){

        contenido.innerHTML = `

        <h2>Control de Versiones y Repositorios</h2>

        <div class="card">

            <h3>Repositorio de Software</h3>

            <p>
            Lugar donde se almacena el código fuente y archivos de un proyecto.
            </p>

        </div>

        <div class="card">

            <h3>Ramas</h3>

            <p>
            Permiten trabajar en diferentes versiones del proyecto sin afectar la principal.
            </p>

        </div>

        <div class="card">

            <h3>Merge Forzado</h3>

            <p>
            Unión manual de cambios cuando existen conflictos entre ramas.
            </p>

        </div>

        <div class="card">

            <h3>.gitignore</h3>

            <p>
            Archivo que indica qué elementos no deben subirse al repositorio.
            </p>

        </div>
        `;
    }

    else if(tema == "fundamentos"){

        contenido.innerHTML = `

        <h2>Fundamentos de Programación</h2>

        <div class="card">

            <h3>Variable</h3>

            <p>
            Espacio que almacena información.
            </p>

        </div>

        <div class="card">

            <h3>Funciones</h3>

            <p>
            Bloques de código reutilizables.
            </p>

            <pre>
function saludar(){

   console.log("Hola");
}
            </pre>

        </div>

        <div class="card">

            <h3>Parámetros</h3>

            <p>
            Datos que recibe una función.
            </p>

        </div>

        <div class="card">

            <h3>Tipos de Datos</h3>

            <p>
            Número, texto, booleanos y arreglos.
            </p>

        </div>
        `;
    }

    else if(tema == "estructuras"){

        contenido.innerHTML = `

        <h2>Estructuras de Datos</h2>

        <div class="card">

            <h3>Arreglo</h3>

            <p>
            Colección ordenada de elementos.
            </p>

        </div>

        <div class="card">

            <h3>Lista</h3>

            <p>
            Estructura flexible para almacenar datos.
            </p>

        </div>

        <div class="card">

            <h3>Diccionario</h3>

            <p>
            Guarda datos en pares clave-valor.
            </p>

        </div>

        <div class="card">

            <h3>Ciclo Iterable</h3>

            <p>
            Repite acciones sobre elementos.
            </p>

        </div>
        `;
    }

    else if(tema == "pensamiento"){

        contenido.innerHTML = `

        <h2>Pensamiento Computacional</h2>

        <div class="card">

            <h3>Descomposición</h3>

            <p>
            Dividir problemas grandes en pequeños.
            </p>

        </div>

        <div class="card">

            <h3>Reconocimiento de Patrones</h3>

            <p>
            Identificar similitudes en problemas.
            </p>

        </div>

        <div class="card">

            <h3>Abstracción</h3>

            <p>
            Enfocarse solo en lo importante.
            </p>

        </div>

        <div class="card">

            <h3>Algoritmos</h3>

            <p>
            Pasos ordenados para resolver problemas.
            </p>

        </div>
        `;
    }

    else if(tema == "apps"){

        contenido.innerHTML = `

        <h2>Desarrollo de Apps</h2>

        <div class="card">

            <h3>Construcción</h3>

            <p>
            Desarrollo de la aplicación.
            </p>

        </div>

        <div class="card">

            <h3>Pruebas</h3>

            <p>
            Verificación de errores.
            </p>

        </div>

        <div class="card">

            <h3>Despliegue</h3>

            <p>
            Publicación de la aplicación.
            </p>

        </div>

        <div class="card">

            <h3>Entorno Desplegable</h3>

            <p>
            Lugar donde se ejecuta la app.
            </p>

        </div>
        `;
    }

    else if(tema == "uml"){

        contenido.innerHTML = `

        <h2>Requerimientos y UML</h2>

        <div class="card">

            <h3>Requerimientos</h3>

            <p>
            Necesidades del sistema.
            </p>

        </div>

        <div class="card">

            <h3>Requisitos</h3>

            <p>
            Condiciones que debe cumplir el software.
            </p>

        </div>

        <div class="card">

            <h3>UML</h3>

            <p>
            Lenguaje visual para modelar software.
            </p>

        </div>

        <div class="card">

            <h3>Navegación Web</h3>

            <p>
            Forma en que el usuario se mueve entre páginas.
            </p>

        </div>
        `;
    }
}