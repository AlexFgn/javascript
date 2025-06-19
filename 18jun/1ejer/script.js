//1. Condicionales

// 1.1. if / else if/ else

// const nota = Number(prompt("Ingresa la nota de (0-100):"))

// if (nota >=90){
//     console.log("Calificacion A");
// }
// else if (nota >=80){
//     cosole.log("Calificacion: B");
// }
// else if (nota >=70){
//     console.log("Calificacion: C");
// }
// else if (nota >=60){
//     console.log("Cslificacion: D");
// }
// else {
//     console.log("Calificacion: F");
// }



//2. Switch

// const diaNum = Number(prompt("Dia de la semana (1-7)"));
// let nombreDia; 
// switch (diaNum) {
//     case 1:
//         nombreDia = "Lunes";
//         break;
//      case 2:
//         nombreDia = "Martes";
//         break;
//     case 3:
//         nombreDia = "Miercoles";
//     case 4:
//         nombreDia = "Jueves";
//         break;
//     case 5:
//         nombreDia = "viernes";
//         break;
//     case 6:
//         nombreDia = "Sabado";
//         break;
//     case 7:
//         nombreDia = "Domingo";
//         break;
//     default:
//         nombreDia="Numero de dia invalido";
// }
//     console.log(nombreDia);



//2. BUCLES 
//2.1 for   (son numeros recorridos del 10 al 100 "se puede ver en la consola de la web")

// for (let i = 10; i <= 100; i++){
//     console.log(i);
// }



//While (Conocemos el numero de interacciones  "se ve en la consola")

// let contador = -5;
// while (contador <=10){
//     console.log(contador);
//     contador++;
// }



//do...While (si no conocemos las interacciones)

let num;
do{
    num = Number(prompt("Ingresa un numero mayor que 10:"));
}while (num <= 10);
console.log("!Gracias! ingresaste:",num);