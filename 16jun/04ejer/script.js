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