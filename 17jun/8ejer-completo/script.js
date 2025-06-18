//Funcion auxiliar: Lee y convierte el valor de un input (texto) en un numero

function leerNumero(id){
  //Obtiene el elemento por su id y extrae su valor como texto
  const val = parseFloat (document.getElementById(id).value);
  //Si el valor no es numero valido, devuelve null, sino, el numero convertido
  //Verifica si 'val' no es numero para esto usa isNaN
  //Si es asi devuelve un null (para indicar valor invalido)
  //Si 'val' si es un numero valido, devuelve tal cual
  //Operador ternario (? :) if ...else 
  return isNaN(val) ? null : val;
}

//1.Calcula el perimetro de un rectangulo
function calcularPerimetro(){
  //Lee la base y la altura usando la funcion auxiliar
  const b = leerNumero('baseRect');
  const h= leerNumero('alturaRect');


//Si cualquiera de los dos es un null (valor invalido), mostrar esta alerta y sale

if (b === null || h === null ) 
  return alert('Por favor ingresa valores validos');
//Formula del perimetro; 2* (base + altura)
const p = 2 * (b + h);

//Escribe el resultado en el <p> con id= "resPerimetro"
document.getElementById('resPerimetro').textContent= `Perimetro: ${p}`;
}


//2. Convertir grados celsius a fahrenheit
function convertirFahrenheit(){
  //lee el valor en celsius
  const c= leerNumero('celsius');
  //valida el numero
  if (c === null) return alert('Por favor ingresa un valor valido');
    // Formula: (ºC * 9/5) + 32
  const f= (c * 9/5) + 32;
  //Mostrar la conversion redondeando a dos decimales
  document.getElementById('resFahrenit').textContent=`${c.toFixed(2)}ºC= ${f.toFixed(2)}ºF`;
}


//3. Area del triangulo
