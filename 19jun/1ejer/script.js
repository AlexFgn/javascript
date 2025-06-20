// 1. Saludo personalizado
// Define la funcion saludar

// function saludar(nombre) {
//     return `¡Hola, ${nombre}!`;
// }

// // prueba para que salga en la consola
// console.log(saludar('Alex'));
// console.log(saludar('Ruben'));



// // 2. Suma de dos numeros
// //Definir la funcion sumar
// function suma(a,b){   //en la funcion hay que poner parametro valores (en este caso numeros enteros)
//     return a + b;
// }

// console.log(suma(3,5))  //aqui si ponemos los numero que queremos que sume




// 3. Verificar par/impar
// Define la funcion esPar

// function esPar (numero){
//     return numero % 2 === 0
// }

// console.log(esPar(4));
// console.log(esPar(7))

// // El true o false sale por los 3 iguales de la funcion
// // echar un vistazo 



// 4.Longitud de una cadena
// Define la funcion longitud

// function longitud(cadena){
//     return cadena.lenght;
// }
// console.log(longitud('JavaScript'));
// console.log(longitud('Alex'))


//Repetir un texto

function repeat (nombre,veces){
    let resultado= '';
    for(let i=0; i< veces; i++){
        resultado += nombre;
    } 
    return resultado;

}
    console.log(repeat('alex ',));  //los espacios tambien cuentan en la consola