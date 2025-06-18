const catetoa= prompt("Ingresa altura del cateto");
const catetob= prompt("Ingresa base de cateto");

const nota1= Number(catetoa);
const nota2= Number(catetob);

const hipotenusa=(Math.hypot (catetoa, catetob)); //formula de la hipotenusa :Math.hypot

alert(`La hipotenusa es: ${hipotenusa.toFixed(2)}cm`);