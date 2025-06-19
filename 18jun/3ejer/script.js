//Asigna el boton 'btnFruit' el evento addEventListener "click"
document.getElementById('btnFruit').addEventListener('click',()=>{

    //asignamos la variable constante "o" puede ser 'option'
    //La variable o recibe el contenido del input de id 'opt'
    //y lo transforma con un Number = Cambiar de texto a numero
    const o = Number(document.getElementById('opt').value);
    //Asigno otra variable fruta de tipo let (cambiante)
    let fruta;
    //asignamos la variable imgSrc de tipo let porque cambiara la imagen segun la opcion del usuario
    let imgSrc= "";

    //Segun el numero, asignamos una fruta


    //abre el condicional switch -- switch (o) / o puede ser 1,2 o 3 o tambien puede ser 100, 90, etc
    switch (o){
        case 1:
            fruta = 'Manzana';
            imgSrc= 'manzana.jpg';
            break
        case 2:
            fruta= 'Banana';
            imgSrc= 'banana.jpg';
            break
        case 3:
            fruta= 'Naranja';
            imgSrc= 'naranja.jpg';
            break
              //Si el usuario textea otro numero /termina
        default:
            fruta = 'Opcion invalida';
            imgSrc= '=(';
    }
  
    document.getElementById('out2').textContent = fruta;
    document.getElementById('fruitImage').src = imgSrc;


});