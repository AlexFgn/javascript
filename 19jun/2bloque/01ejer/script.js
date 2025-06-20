//1. Arrays con rutas de imagenes
const foto =['img1.jpg', 'img2.jpg', 'img3.jpg'];

//2. Referenias al <img> y al boton
const img = document.getElementById('imagen');
const btn = document.getElementById('btnSiguiente');

//Indice actual
let indice = 0;
// Funcion que avanza al siquiente indice y actualiza la imagen
function siguienteFoto(){
    //Aumento el indice en 1 y usa el modulo % para reiniciar si llega al final
    //Ejm: Si hay 3 fotos y estamos en la 3
    indice= (indice +1) % foto.length;
    img.src = foto[indice];
}
//Evento click
btn.addEventListener('click', siguienteFoto);

