/*let paquete1 = 'Hola soy el paquete 1';
let paquete2 = 'Hola soy el paquete 2';
let paquete3 = 'Hola soy el paquete 3';
let paquete4 = 'Hola soy el paquete 4';

function miPaquete4() {
    setTimeout(() => {
        return'Hola soy el paquete 4';
    }, 3000);
}

console.log(paquete1);
console.log(paquete2);
console.log(paquete3);
console.log(paquete4);*/

//CALLBACK EN LAS ASINCRONIAS
/*function saludar(nombre, edad,miFuncion) {
    console.log('Hola soy'+ nombre)
    console.log (edad);
    console.log(eresCasado);
    miFuncion(edad);
}

setTimeout(() => {
    miFuncion(edad);
},3000);

function saludo2 (edad) {
    console.log('Hola soy la segunda funcion');
    console.log(edad);
}

saludar('Juan', 28, false, saludo2);
 //o puedo poner la segunda funcion de frente 
saludar('Juan', 28, (edad) => {
    console.log('Hola soy yo la segunda funcion');
    console.log(edad);
});*/
 
//Otra forma de resolverlo mas corta.
/*
function saludar(nombre, edad,miFuncion) {
    console.log('paquete 1');
    setTimeout(() => {
        //Paquete 2
        miFuncion(edad);
    },3000);
    console.log ('Paquete 3');
    console.log('Paquete 4');
}

saludar('Juan', 28, (edad) => {
    console.log('Hola soy el Paquete 2');
});
*/
//EJERCICIO 1
/*
function saludar(saludo, miFuncion) {
    miFuncion(saludo.toUpperCase());
}

saludar('Hola Ucampers', function(valor) {
    console.log(valor);
});
*/

//PROMESAS PARA RESOLVER LA ASINCRONIA
/*
const promesa1 = new Promise(function(resuelve, rechaza){
    setTimeout(()=> {
        const sumar = 2+2;
    resuelve(sumar);
    }, 3000);
});

promesa1
.then((resultado) => {
    console.log('La promesa se ejecuto correctamente');
})
.catch(error => {
    console.log('La promesa fallo');
})
.finally(()=> {
    console.log('Ha finalizado la promesa');
})
*/
/*const saludar = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('Hola mundo');
    }, 4000);
});

saludar.then((data) => {
    console.log(data);
})
.catch ((error)=>{
    console.log('Hubo un error');
})
.finally(()=> {
    console.log('Ha finalizado');
})
*/
//EJERCICIO 6
/*const status1 = new Promise((resolve,reject)=>{
    const valor = 5;
    if(valor > 5) {
        resolve('Es mayor a 5');
    } else {
         reject('Es menor a 5');
    }
});
 
status1.then((data)=>{
    console.log(data)
})
.catch((error)=> {
    console.log(error);
})
*/

//PROMESAS EN CASCADAS
/*
const promesa1 = new Promise((resolve,reject) => {
    const dbIds =[1 , 2, 3];
    resolve(dbIds);
});

const promesa2 = new Promise((resolve,reject)=>{
    const dbUsers = [
    {id:1, nombre:'Juan', idCurso:1},
    {id:2, nombre:'Pedro', idCurso:1},
    {id:3, nombre:'Ulises', idCurso:2},
    ];
    resolve(dbUsers);
});

const promesa3 = new Promise((resolve,reject)=> {
    const dbCursos = [
        { id:1 , nombreCurso: 'HTML'} ,
        { id:1 , nombreCurso: 'HTML'} ,
    ];
    resolve(dbCursos);
});
*/
/*
promesa1.then((ids)=> {
    promesa2.then((users)=> {
        promesa3.then((cursos)=> {
            console.log(ids);
            console.log(users);
            console.log(cursos);
        });
    });

});
*/
//Esta es una forma mas facil de hacer ASYNC en vez de casacada _> ASYNC AWAIT
/*
async function ejecutarPromesas() {
    const ids = await promesa1;
    const users = await promesa2;
    const cursos = await promesa3;

    console.log(ids);
    console.log(users);
    console.log(cursos);
}

//Tengo que llamar la funcion
ejecutarPromesas()
*/

//EJERCICIOS PRACTICA REPOSITORIO 
//EJERCICIO 1

const paises = new Promise ((resolve,reject) => {
    const resultado = [
        {id:1, nombre:'Mexico'},
        {id:2, nombre:'Peru'},
        {id:3, nombre:'Colombia'},
    ];
    resolve(resultado);
});

const estados = new Promise((resolve, reject) => {
    const resultado = [
        {id:1, nombre:'AguasCalientes', idPais: 1 },
        {id:2, nombre:'BajaCalifornia', idPais: 1 },
        {id:3, nombre:'BajaCalifornia', idPais: 1 },
        {id:4, nombre:'Campeche', idPais: 1 },
        {id:5, nombre:'Guainía', idPais: 3},
        {id:5, nombre:'Huila', idPais: 3},
    ];
    resolve(resultado);
});

async function ejecutarPromesas() {
    try {
        const getPaises = await paises;
        const getEstados = await estados;

        const estadosDeMexico = getEstados.filter((estado) => estado.idPais === 1);
        const estadosDeMexicoMayus = estadosDeMexico.map((estado) =>
         estado.nombre.toUpperCase()
        );
    
        console.log(estadosDeMexicoMayus);

    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
    }
}

ejecutarPromesas();
