// Crear la funcion obtenerTasa(moneda)
function obtenerTasa(moneda){
    switch(moneda) {
        case 'USD': return 1.09; //1 EUR=1.09 USD
        case 'GBP': return 0.85; //1 EUR=0.85 GBP
        case 'JPY': return 152.34; //1 EUR=153.34 JPY
        default: return 1; 
    }
}


//Crear una funcion convertir: multiplica cantidad x tasa
function convertir(cantidad, tasa) {
    return cantidad * tasa;
}
//Guardamos en una const la referencia al boton
const btnConvertir= document.getElementById('btnConvertir');

//Guardamos tambien la referencia al span resultado
const spanResultado = document.getElementById('resultado');

btnConvertir.addEventListener('click', function(){
    //Leemos la cantidad del input y lo parseamos a float
    let cantidad = parseFloat (document.getElementById('cantidad').value) || 0;
    //Leemos la moneda seleccionada en el select
    let moneda = document.getElementById('moneda').value;

    //Obtener la tasa de la moneda
    let tasa= obtenerTasa(moneda);
    
    //Calculamos el resultado con la funcion convertir
    let resultado = convertir(cantidad, tasa);

    //Formateamos el resultado con dos decimales y mostramos
    spanResultado.textContent = resultado.toFixed(2) + '' + moneda;


})