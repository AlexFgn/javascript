//1. Crear un array de colores
const colores=["rojo", "amarillo", "naranja", "verde"];
              // 0         1          2           3
console.log(colores);


//2. Acceso y modificacion por indice
// mostramos por indice
console.log(colores[1]); //amarillo

//Modificamos
colores[1]="azul";
console.log(colores);  //En este caso hemos cambiado el amarillo (1) por el azul


//3. Añadir y eliminar elementos
colores.push("morado"); //crea el "morado" al final del array

colores.unshift("rosa"); //crea el "rosa" al inicio del array
  
    // -Eliminar elemento final 
colores.pop(); //elimina el morado

    //Eliminar el primer elemento
colores.shift(); //elimina el rosa


//4. Extraer subarrays con slice
const subColores = colores.slice(0,2);
console.log(subColores);
console.log(colores);


//5. Recorrer el array con forEach
colores.forEach((color,indice)=>{
    console.log(`El color de la posicion ${indice} es ${color}`);  //Esto crea como una lista en la consola
})


//6.Insertar y eliminar con splice
const colores2 =["rojo", "naranja", "azul", "amarillo"];
             //    0        1         2           3

colores2.splice(1,1,"verde", "marron"); // en este caso elimina el naranja y lo sustituye por verde y marron
console.log(colores2);


// 7.Invertir el array con reverse
const numero= [1,2,3,4,5];
numero.reverse();
console.log(numero);   //cuando son numeros no hace falta las comillas y en este casi invierte el sentido de los numeros en la consola


// 8.Unir elementos con join
const colores3= ["rojo", "verde", "azul"];
const cadena = colores3.join("-");    //une los "colores" con un guion - 
console.log(cadena);


//9. Recorrer con for ... of y condicion
const nums= [10, 15, 20, 25, 30];
//En cada vuelta, la variable n toma el valor de uno de elementos de nums
//El orden sera ..10, 15 ....
for (let n of nums){
    //el operador % devuelve el resto de la division si es 0
    //Si es 0 entonces es multiplo de 20
    if (n%20 === 0){
        console.log(`${n} es multiplo de 20`);
    }
}



// 10.Declarar un array de frutas con 3 elemetos
const frutas=["manzana", "pera", "uva"];
 
// Usar el metodo .map() para transformar cada elemento del array
// La funcion flecha f=> f.UpperCase() recibe cada fruta (f) y devuelve su version en mayusculas
const FRUTAS_MAYUS = frutas.map(f=> f.toUpperCase());

console.log(FRUTAS_MAYUS)   //Para cambiar de minusculas a mayusculas(manza, pera,uva)

