//Agrega un evento al boton con id 'btnSum' que se ejecuta al hacer clic
document.getElementById('btnSum').addEventListener('click',()=>{

    //Obtiene el valor del inptu con id 'n3', lo convierte a numero y lo guarda
    //en la variable n
    const n= Number(document.getElementById('n3').value);
    //Inicializa la variable 'suma' en 0; esta servira como acumulador
    let suma =0;

    //Bucle que suma todos los numeros del 1 hasta el 'n'
    for (let i=1; i<=n; i++){
        //suma = suma + i (acumula la suma de los numeros)
        suma += i;
    }

    document.getElementById('out3').textContent = `Resultado: ${suma}`;

});