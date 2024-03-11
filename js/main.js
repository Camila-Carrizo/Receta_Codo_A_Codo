//Elementos HTML

tablaIngredientes = document.getElementById('tablaIngredientes')
divReceta = document.getElementById('receta')
btnVerReceta = document.getElementById('verReceta')
btnVerIngredientes = document.getElementById('verIngredientes')
paso = document.getElementById('paso')
btnNext = document.getElementById('stepNext')
btnBack = document.getElementById('stepBack')

//Declaración de variables

let pasoActual = 0

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

function actualizarPaso(){
    paso.innerHTML = pasosReceta[pasoActual]

    switch (pasoActual) {
        case 0:
          btnBack.style.display = 'none'
          break;
        case pasosReceta.length-1:
            btnNext.style.display = 'none'
            break;
        default:
            btnBack.style.display= 'block'
            btnNext.style.display = 'block'
            break;
      }
}

function pasoSiguiente(){
    if(pasoActual < pasosReceta.length -1){
        btnNext.style.display = 'block'
        pasoActual++
        actualizarPaso()
}}

function pasoAnterior(){
    if(pasoActual > 0){
        btnBack.style.display = 'block'
        pasoActual--
        actualizarPaso()
    }}


// Eventos

btnVerReceta.addEventListener('click', () => {
    tablaIngredientes.classList = []; 
    divReceta.classList = []; 

    tablaIngredientes.classList.add('desaparecerTabla'); 

    setTimeout(() => {
        divReceta.classList.add('aparecerReceta'); 
        divReceta.style.display = 'block'; 
    }, 500);

    tablaIngredientes.addEventListener('transitionend', () => {
        tablaIngredientes.style.display = 'none'}, { once: true });
});

btnVerIngredientes.addEventListener('click', () => {
    divReceta.classList = []; 
    tablaIngredientes.classList = []; 

    divReceta.classList.add('desaparecerReceta'); 
    setTimeout(() => {
        tablaIngredientes.style.display = 'block'; 
        tablaIngredientes.classList.add('aparecerTabla'); 
    }, 500);

    divReceta.addEventListener('transitionend', () => {
        divReceta.style.display = 'none'}, { once: true });
});

btnBack.addEventListener('click', ()=>{
    pasoAnterior()
})

btnNext.addEventListener('click', ()=>{
    pasoSiguiente()
})

actualizarPaso();