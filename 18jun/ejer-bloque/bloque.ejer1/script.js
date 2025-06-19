// 1 ejeercicio taxi
// creo el evennto click
document.getElementById('btnprice').addEventListener('click', () =>{
    // obtiene km como numero
    //parseFloat= transforma el numero a decimales
    const km = parseFloat(document.getElementById('km').value);
    // Coste fijo
    const tarifaBase= 4;
    //precio por kilometro
    const costeKm= 2.5;
    // Suma tarifa base mas coste por km
    const total= tarifaBase + (costeKm * km);
    document.getElementById('taxi-result').textContent= 'Precio:' + total.toFixed(2) + '€';

})


// 02 Ejercicio: IMC
// creo el evento click

document.getElementById('calc-imc').addEventListener('click', () =>{
    const peso= parseFloat(document.getElementById('peso').value);
    const altura= parseFloat(document.getElementById('altura').value);
    const imc= peso / (altura*altura); //Formula imc
    let categoria=''; //Variable para categoria
    if (imc < 18.5){
        categoria = 'Bajo de peso'
    }else if (imc < 25) {
        categoria= 'normal';
    }else if (imc<30)¨{
        categoria= 'sobrepeso';
    }else {
        categoria= 'obesidad';

    }
    document.getElementById('imc-result').textContent='IMC:' + imc.toFixed(2) + '-' + categoria;
    

})
