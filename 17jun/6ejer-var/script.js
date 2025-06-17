//EJERCICIO DE BUCLE PARA QUE PIDA UN NNUMERO SI O SI


//re-prompt hasta que el numero sea valido
//Funcion auxiliar: pide un numero hasta que l conversion con Number()
// no sea NaN 



//Se declara la funcion pedirNumero(mensaje) = prompt (mensaje)

function pedirNumero(mensaje){
  //nombrando una variable valor (en blanco/no esta definido)
  let valor;
  //generamos un bucle do-while
  do{
    // const entrada recibe de prompt(mensaje)= Lo que usuario ingrese
    const entrada= prompt(mensaje);
    //valor sera igual entrada tranformado en numero
    valor= Number(entrada);
    //su valor no es un numero
    if(Number.isNaN(valor)){
      alert("entrada no valida.Por favor ingresa un numero.")
    }
    //mientras valor no sea un numero
  } while (Number.isNaN(valor));
    return valor;
  }


  //1. Pedir el primer y segundo numero (hasta que sea valido)

const suma1= pedirNumero("Ingresa el primer numero");
const suma2= pedirNumero("ingresa el segundo numero");


//calcular suma
const nota1=Number(suma1);
const nota2=Number(suma2);

const resultado= (nota1 + nota2);

// Mostrar el resultado

alert(`El resultado es: ${resultado}`);