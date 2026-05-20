function menu(tema){

    let subtemas = document.getElementById("subtemas");

    if(tema === "versiones"){

        subtemas.innerHTML = `
        <h2>Control de Versiones</h2>
        <button onclick="detalle('repo')">Repositorio</button>
        <button onclick="detalle('ramas')">Ramas</button>
        <button onclick="detalle('merge')">Merge</button>
        <button onclick="detalle('gitignore')">.gitignore</button>
        `;
    }

    else if(tema === "fundamentos"){

        subtemas.innerHTML = `
        <h2>Fundamentos</h2>
        <button onclick="detalle('variable')">Variable</button>
        <button onclick="detalle('funcion')">Función</button>
        <button onclick="detalle('parametros')">Parámetros</button>
        <button onclick="detalle('tipos')">Tipos de datos</button>
        `;
    }

    else if(tema === "estructuras"){

        subtemas.innerHTML = `
        <h2>Estructuras</h2>
        <button onclick="detalle('arreglo')">Arreglo</button>
        <button onclick="detalle('lista')">Lista</button>
        <button onclick="detalle('diccionario')">Diccionario</button>
        <button onclick="detalle('ciclo')">Ciclo</button>
        `;
    }

    else if(tema === "pensamiento"){

        subtemas.innerHTML = `
        <h2>Pensamiento Computacional</h2>
        <button onclick="detalle('descomposicion')">Descomposición</button>
        <button onclick="detalle('patrones')">Patrones</button>
        <button onclick="detalle('abstraccion')">Abstracción</button>
        <button onclick="detalle('algoritmo')">Algoritmo</button>
        `;
    }

    else if(tema === "apps"){

        subtemas.innerHTML = `
        <h2>Apps</h2>
        <button onclick="detalle('construccion')">Construcción</button>
        <button onclick="detalle('pruebas')">Pruebas</button>
        <button onclick="detalle('despliegue')">Despliegue</button>
        `;
    }

    else if(tema === "uml"){

        subtemas.innerHTML = `
        <h2>UML</h2>
        <button onclick="detalle('req')">Requerimientos</button>
        <button onclick="detalle('requisito')">Requisito</button>
        <button onclick="detalle('uml')">UML</button>
        <button onclick="detalle('navegacion')">Navegación</button>
        `;
    }
}


function detalle(item){

    let detalle = document.getElementById("detalle");

    const datos = {

        repo:"Repositorio: lugar donde se guarda el código.",

        ramas:"Ramas: versiones paralelas del proyecto.",

        merge:"Merge: unión de cambios.",

        gitignore:".gitignore: archivos ignorados por Git.",

        variable:"Variable: espacio que guarda datos.",

        funcion:"Función: bloque reutilizable.",

        parametros:"Parámetros: datos de entrada de una función.",

        tipos:"Tipos: texto, número, booleano.",

        arreglo:"Arreglo: colección de datos.",

        lista:"Lista: conjunto ordenado de elementos.",

        diccionario:"Diccionario: clave-valor.",

        ciclo:"Ciclo: repetición de instrucciones.",

        descomposicion:"Dividir problemas grandes en pequeños.",

        patrones:"Encontrar similitudes.",

        abstraccion:"Enfocarse en lo importante.",

        algoritmo:"Pasos para resolver un problema.",

        construccion:"Desarrollo de la app.",

        pruebas:"Revisión de errores.",

        despliegue:"Publicación del sistema.",

        req:"Necesidades del sistema.",

        requisito:"Condiciones que debe cumplir.",

        uml:"Lenguaje visual de modelado.",

        navegacion:"Movimiento entre páginas."
    };

    detalle.innerHTML = `
        <h2>Detalle</h2>
        <p>${datos[item]}</p>
    `;
}