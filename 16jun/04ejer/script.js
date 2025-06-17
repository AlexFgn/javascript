let numero = Number(prompt("Introduce el número:"));  //prompt =para que salga un cartel en la web//

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else if (numero === 0) {
    console.log("El número es cero");
} else {
    console.log("No has introducido un número válido");
}


let input= prompt("ingresa un numero");

let numero= Number (input);

if (isNaN(numero)) {
  console.log("no es un numero valido")
}else{
  if (numero > 0) {
    console.log(`${numero} es positivo`);
  }else if (numero < 0){
    console.log(`${numero} es negativo`);
//.............................................................// /falta cosas ver apuntes
  }
}