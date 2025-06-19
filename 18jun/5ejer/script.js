//Agregamos el evento click
document.getElementById('btnCount').addEventListener('click', ()=>{

    //Obtiene el valor ingresado en el input id star y lo convierte en numero
    let num= Number(document.getElementById('star').value);
    //obtiene la lista <ul> donde se van a mostrar los numeros
    const ul= document.getElementById('out4');

    //Limpia el contenido anterior de la lista para no duplicar resultados
    ul.innerHTML= '';
    //Es un bucle que se ejecuta mientras 'num' sea mayor o igual a 1
    while(num>= 1){
        //Crea un nuevo elemento <li> (item de lista)
        const li= document.createElement('li');

        //Le asigna como contenido el numero actual
        li.textContent= num;
        //Agrega la etiqueta <li> como hijo de <ul>, es decir lo muestra , en la lista dentro de ul
        ul.appendChild(li);
        //Decrementa el numero en 1 (cuemta regresiva)
        num--;

        //(Para aumentar seria cambaindo a ++)

    }
});