//1. Referencias del input, boton y mensaje
const nombreInput = document.getElementById('nombre');
const btnEnviar = document.getElementById('btnEnviar');
const msg = document.getElementById('mensaje');

//2.Funcion que valida que nombre no este vacio
function validar(nombre){
    return nombre.trim().length > 0;
}

//3. Evento click/ Valida y muestra mensaje
btnEnviar.addEventListener('click', ()=>{
    const nombre = nombreInput.value;
    if(validar(nombre)){
        msg.textContent = `!Bienvenido, ${nombre}`;
    }else{
        msg.textContent = 'por favor, ingresa tu nombre'
    }
})