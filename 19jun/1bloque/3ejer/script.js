//Crear la funcion calcular IMC
function calcularIMC(peso,altura){
    return peso/ (altura * altura);
}

//Funcion etiquetaIMC, recibe un valor IMC y devuelve categoria
function etiquetaIMC(imc){
    if (imc < 18.5) return 'Bajo de peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
}
 document.getElementById('btnCalcular').addEventListener('click', function (){
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;
    //calcular imc
    let imc=calcularIMC(peso,altura);
    //mostramos el IMC formateado a dos decimales
    document.getElementById('imcVal').textContent = imc.toFixed(2);
    //Obtenemos y mostramos la etiqueta, usando la funcion
    document.getElementById('imcEtiqueta').textContent= etiquetaIMC(imc);
 });

