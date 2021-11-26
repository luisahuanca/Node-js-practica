
fetch('./nombres.json')
.then((respuesta) => respuesta.json()) //el archivo que voy a leer tiene .json
.then((resultadoFinal) => console.log(resultadoFinal));

function saludar () {
    return new Promise ((resolve,reject) => {
        resolve()
    });
}

saludar()