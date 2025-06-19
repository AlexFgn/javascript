//Crear el evento clic
document.getElementById('btnGuess').addEventListener('click', ()=>{
    let intento;
    //Hacemos al menos un prompt y repetimos hasta que sea 'hola'

    do{
        intento= prompt('Ingresa la palabra secreta:');
    }
    //Sera un bucle MIENTRAS el prompt no sea un 'hola'
    while (intento !== 'hola');
    document.getElementById('out5').textContent= '!Correcto! ';

});



// === = Es igual en typo como contenido (exactamente igual)
// !== = no es igual en tipo ni en contenido (totalmente diferente)