const precio= prompt("ingresa el precio original");

const porcentaje= prompt("ingresa el descuento");

const nota1= Number(precio);
const nota2= Number(porcentaje);

const descuento= (nota1 *(1 - nota2/100))

alert(`El precio final es: ${descuento.toFixed(2)}`)