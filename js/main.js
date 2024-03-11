//ELEMENTOS HTML

tablaIngredientes = document.getElementById('tablaIngredientes')
divReceta = document.getElementById('receta')
btnVerReceta = document.getElementById('verReceta')
btnVerIngredientes = document.getElementById('verIngredientes')
paso = document.getElementById('paso')
btnNext = document.getElementById('stepNext')
btnBack = document.getElementById('stepBack')

//DECLARACIÓN DE VARIABLES

let pasoActual = 0 // Variable que almacena el índice del paso actual

// Arreglo que contiene los pasos de la receta

var pasosReceta = [
    "<strong>Paso 1:</strong><br><br> Precalentar el horno a 200°C y hornear 6 papas hasta que estén blandas (aproximadamente 1 hora).", 

    "<strong>Paso 2:</strong><br>Preparar la salsa de tomate en una olla a fuego bajo, calentar:<br><ul><li>un chorrito de aceite de oliva</li><li>2 dientes de ajo picados</li><li>1 trozo de zanahoria (retirar cuando la salsa esté lista)</li><li>500 gramos de tomate natural</li><li>un manojo de albahaca fresca</li><li>1 cucharadita de sal</li><li>1 cucharada de azúcar</li><li>Tapar y cocinar durante aproximadamente 1 hora.</li></ul>",

    "<strong>Paso 3:</strong><br><br> Mientras las papas estén calientes o tibias, aplastarlas bien en un recipiente grande hasta hacerlas puré.",

    "<strong>Paso 4:</strong><br><br> Batir un huevo pequeño y agregarlo al puré. Si no se dispone de un huevo pequeño, agregar solo la yema.",
    
    "<strong>Paso 5:</strong><br><br> Mezclar el puré y el huevo, agregando gradualmente aproximadamente 150 gramos de harina sin polvo de hornear a la mezcla hasta obtener una masa suave.", 
    
    "<strong>Paso 6:</strong><br><br> Colocar la masa en una superficie lisa y enrollarla hasta formar un largo tirabuzón. Si es necesario, dividir la masa en dos partes.",

    "<strong>Paso 7:</strong><br><br> Cortar el tirabuzón en pequeñas porciones de 2 a 3 centímetros.",
    
    "<strong>Paso 8:</strong><br><br> Pasar cada porción por los dientes de un tenedor para darles la forma característica de ñoquis.",
    
    "<strong>Paso 9:</strong><br><br> Cocinar los ñoquis en agua hirviendo. Retirarlos del agua cuando floten a la superficie y colocarlos en un plato.",
    
    "<strong>Paso 10:</strong><br><br> Servir los ñoquis con la salsa de tomate preparada y agregar queso rallado al gusto."

] 




//FUNCIONES 

// Función para actualizar el paso actual mostrado en pantalla

function actualizarPaso(){
    paso.innerHTML = pasosReceta[pasoActual] // Actualiza el contenido del elemento paso con el paso actual

    // Oculta o muestra los botones de siguiente y anterior según el paso actual
    switch (pasoActual) {
        case 0:
          btnBack.style.display = 'none'  // Oculta el botón de retroceso en el primer paso
          break;
        case pasosReceta.length-1:
            btnNext.style.display = 'none' // Oculta el botón de avance en el último paso
            break;
        default: 
            btnBack.style.display= 'block' // Muestra el botón de retroceso en pasos intermedios
            btnNext.style.display = 'block' // Muestra el botón de avance en pasos intermedios
            break;
      }
}

// Función para pasar al siguiente paso de la receta

function pasoSiguiente(){
    if(pasoActual < pasosReceta.length -1){
        btnNext.style.display = 'block'
        pasoActual++ // Incrementa el índice del paso actual
        actualizarPaso() // Actualiza el paso mostrado en pantalla 
}}

function pasoAnterior(){
    if(pasoActual > 0){
        btnBack.style.display = 'block'
        pasoActual-- // Función para retroceder al paso anterior de la receta
        actualizarPaso() // Actualiza el paso mostrado en pantalla 
    }}


// EVENTOS

// Evento para mostrar la receta y ocultar los ingredientes al hacer clic en el botón "Ver Receta"

btnVerReceta.addEventListener('click', () => {
    tablaIngredientes.classList = []; // Elimina todas las clases CSS aplicadas al elemento de la tabla de ingredientes
    divReceta.classList = []; // Elimina todas las clases CSS aplicadas al elemento de la receta

    tablaIngredientes.classList.add('desaparecerTabla');  // Agrega la clase CSS 'desaparecerTabla' para iniciar la animación de desaparición de la tabla de ingredientes


    setTimeout(() => {
        divReceta.classList.add('aparecerReceta'); // Agrega la clase CSS 'aparecerReceta' para iniciar la animación de aparición de la receta
        divReceta.style.display = 'block'; // Muestra el elemento de la receta
    }, 500);

    // Evento de transición para detectar cuando finaliza la animación de desaparición de la tabla de ingredientes
    tablaIngredientes.addEventListener('transitionend', () => {
        tablaIngredientes.style.display = 'none'}, { once: true }); //Oculta completamente el elemento de la tabla de ingredientes después de la animación
});


// Evento para mostrar los ingredientes y desaparecer la receta al hacer clic en el botón "Ver Ingredientes"

btnVerIngredientes.addEventListener('click', () => {
    divReceta.classList = []; // Elimina todas las clases CSS aplicadas al elemento de la receta
    tablaIngredientes.classList = []; // Elimina todas las clases CSS aplicadas al elemento de la tabla de ingredientes

    divReceta.classList.add('desaparecerReceta'); 
    setTimeout(() => {
        tablaIngredientes.style.display = 'block'; // Muestra el elemento de la tabla de ingredientes
        tablaIngredientes.classList.add('aparecerTabla'); // Agrega la clase CSS 'aparecerTabla' para iniciar la animación de aparición de la tabla de ingredientes
    }, 500);

    // Evento de transición para detectar cuando finaliza la animación de desaparición de la receta
    divReceta.addEventListener('transitionend', () => {
        divReceta.style.display = 'none'}, { once: true }); //Oculta completamente el elemento de la receta después de la animación
});

// Evento para retroceder al paso anterior al hacer clic en el botón de retroceso

btnBack.addEventListener('click', ()=>{
    pasoAnterior()  //Llama a la función para retroceder al paso anterior
})

// Evento para avanzar al paso siguiente al hacer clic en el botón de avance

btnNext.addEventListener('click', ()=>{
    pasoSiguiente() // Llama a la función para avancar al paso siguiente
})

//Llamada a la funcion para actualizar el paso en pantalla

actualizarPaso();