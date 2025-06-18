function pedirNumero(mensaje){
  
  let valor;
 
  do{
    
    const entrada= prompt(mensaje);
  
    valor= Number(entrada);
    
    if(Number.isNaN(valor)){
      alert("Entrada no valida.Por favor ingresa un numero.")
    }
   
  } while (Number.isNaN(valor));
    return valor;
  }



const altura= pedirNumero("ingresa la altura del rectangulo:");




const ancho= pedirNumero("ingresa el ancho del rectangulo");





const nota1= Number(altura);
const nota2= Number(ancho);


const perimetro= (nota1 * 2 + nota2 * 2);

alert(`El perimetro del rectangulo es: ${perimetro.toFixed(2)}cm`);
