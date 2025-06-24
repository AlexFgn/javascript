//1. To do list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList')

addTaskBtn.addEventListener('click', () =>{
    //Leer el valor de input antes de hacer cualquier cosa
    const taskText = taskInput.value.trim();  //para que no tome en cuentas los espacios en blanco
    if (taskText === '') return; //evita tareas vacias

    //Crear elemento <li> y asignar texto
    const li = document.createElement ('li');
    li.textContent = taskText

    //Añadir a la lista y limpiar input
    taskList.appendChild(li);
    taskInput.value = '';
});


//2. Formulario Dinamico
const registerForm = document.getElementById('registerForm')
const formResult = document.getElementById('formResult')

registerForm.addEventListener('submit', e=>{
    //con e.preventDefault evitamos que el formulario recargue la pagina
    e.preventDefault();
    //Recoger datos del formulario
    const nombre = registerForm.nombre.value.trim();
    const email = registerForm.email.value.trim();  //"trim solo se aplica en texto"
    const edad = registerForm.edad.value;

    //Validar entradas basicas
    //si falta algunos de los campos, mostramos mensaje de erros 
    if (!nombre || !email || !edad){
        formResult.textContent = 'Por favor completa todos los campos';
    }

    //Mostrar resultado
    // Tener en cuenta los baksticks!! y con esto añadimos al HTML
    formResult.innerHTML = `
    <p><strong>Nombre:</strong>${nombre}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Edad:</strong>${edad}</p>
    `;
});


// 3.Calculadora de gastos
const expenseInput = document.getElementById('expense');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const totalSpent = document.getElementById('totalSpent');

let total = 0;
 addExpenseBtn.addEventListener('click',()=>{
    //Leer y parsear el valor
    const value= parseFloat(expenseInput.value);
    if (isNaN(value) || value <0) return;


    //sumar al total y actualizar pantalla 
    total += value;
    totalSpent.textContent = total.toFixed(2);


    //Limpiar campo
    expenseInput.value ='';

 });


//4.Galeria de imagenes

const photos = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let current = 0;
const photoE1 = document.getElementById('photo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// funcion para actualizar la imagen mostrada
function updatePhoto(){
    // Cambia el atributo src segun el indice
    photoE1.src = photos [current];
}

prevBtn.addEventListener('click', ()=>{
    // ejem: current = 1
    // current = (1-1+3) %3
    // current= (0+3) %3
    //current= 3%3
    // current = 0 --Anterior
    // el photo.length dentro del parentesis para que no nos de un numero negativo
    current = (current-1 + photos.length) % photos.length;
    updatePhoto(); 
});

nextBtn.addEventListener('click', ()=>{
    current= (current+1) % photos.length;
    updatePhoto();
});


// 5.Clima con API

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');
// Los apis no se suben al Github al codigo!!!
// este api es copiado de una pagina web
const apiKey = '3335b2c8bdcd4a23a8e113728252006';

// Listener asincrono al hacer click en el boton
getWeatherBtn.addEventListener('click', async ()=>{
    
    // leer y limpiar el nombre de la ciudad
    const city = cityInput.value.trim();
    // si no escriben una ciudad, dara error
    if(!city){
        weatherResult.textContent= 'Introduce el nombre de una ciudad';
        return;
    }
    // URL con nuestra clave y ciudad
    // construyo los parametros del url (esto esta sacado de la pagina web)
    const url= `https://api.weatherapi.com/v1/current.json?key=${apiKey}` + 
                 `&q=${encodeURIComponent(city)}` + 
                `&lang=es`;
    try{
        const res = await fetch (url); //Hacemos la peticion HTTP
        const data = await res.json(); //parseamos la respuesta ajson

        // verificar respuesta
        //si la API devuelve errormostramos el mensaje
        if(data.error){
            weatherResult.textContent = `Eror: ${data.error.message}`;
            return;
        }

        // Extraer datos
        const temp = data.current.temp_c; //esto es la temperatura en ºC
        const desc = data.current.condition.text; //esto muestra la descripcion del clima
        const icon = data.current.condition.icon; //URL del icono clima
        const location= data.location.name; //nombre de la ciudad validada por la api
    
        //Mostrar resultado
        weatherResult.innerHTML=`
        <p>
            <img src="${icon}"  alt="${desc}">
            En <strong>${location}</strong> hace
            <strong>${temp} ºC</strong> y esta "${desc}".
        </p>
        `;
    }catch (err){
        weatherResult.textContent= 'Nose pudo obtener el clima.Revisa tu conexion';
        console.error (err);
    }
      
});
