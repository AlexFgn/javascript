//PARA EL EJERCICIO DE LA MEDIA DE 3 NOTAS


//1 .Pedimos al usuario la primera nota
//prompt() siempre devuelve un string / "prompt" -> es la ventanita que sale en el navegador preguntandonos

//var -> no usar
//let -> variable que cambia (condicionales)
//const -> variable constante / no cambia
const entrada1= prompt("ingresa la primera nota:");


//2. Pedimos la segunda nota

const entrada2= prompt("ingresa la segunda nota");

//3. Pedimos la tercera nota

const entrada3= prompt("ingresa la tercera nota");

//4. Convertimos cada entrada de string "texto" a numero
//si la conversion falla, resultara un NaN 

const nota1= Number(entrada1);
const nota2= Number(entrada2);
const nota3= Number(entrada3);

//5. Calculamos el promedio
const promedio= (nota1 + nota2 + nota3) /3;

//6. Mostramos el resultado con alert()
alert(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);

//utilizar un .toFixed(2) para limitar decimales