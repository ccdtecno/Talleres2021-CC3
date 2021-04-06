let asistentes = [15,13,10,12];
//Declaro una variable para mi boton
let boton;
//Declaro una variable para usar como contador
//Inicializa en 0
let contador = 0;


function setup() {
  createCanvas(400, 400);
  //Creo un boton e inserto el texto que va en su interior
  boton = createButton('Cambiar Día');
  //Posiciono el boton en mi canvas
  boton.position(width/2,0);
  //Cada que el boton sea presionado voy a ejecutar una funcion
  //llamada cambiarDia
  boton.mousePressed(cambiarDia);
}

function draw() {
  background(220); 
  //Aqui mi círculo y texto toman el valor del arreglo
  //en que se encuentre mi variable contador 
  ellipse(width/2,height/2,asistentes[contador]*10);
  text(asistentes[contador],width/2,height/2);
}
//Esta es una función que estoy creando, es la que se va a llamar
//cuando presiono el boton
function cambiarDia(){
  
//Empleo una condicional, si el contador es menor al tamaño del arreglo asistentes
//El contador incrementará en uno
  if(contador<asistentes.length){
     contador = contador + 1 ;
//De no cumplirse la condición anterior el contador reinicia en 0
  } else {
    contador = 0;
  }
 
 //Imprimir en consola el valor actual de contador.
  console.log(contador);
}