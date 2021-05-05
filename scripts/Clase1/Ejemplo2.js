let asistentes = [15,13,10,12];
//Declaro una variable para mi boton
let boton;
//Declaro una variable para usar como contador
//Inicializa en 0
let contador = 0;
let col = [[150,200, 56], [50,150,84], [0,120,230], [80,80,80]];


function setup() {
  let cnv = createCanvas(800, 600);
   cnv.parent('main__sketch');
  //Creo un boton e inserto el texto que va en su interior
  boton = createButton('Cambiar Día');
  boton.parent('main__sketch');
  boton.style('background-color', '#5eb475');
  boton.style('align-self', 'flex-end');
  boton.style('border', 'none');
  boton.style('border-radius', '8px');
  boton.style('padding', '0.6rem');
  boton.style('color', 'white');
  boton.style('position', 'absolute');
  boton.style('margin', '2rem');
  boton.style('box-shadow', '1px 1px 2px #4e9561, -1px -1px 2px #6ed389');
  
  boton.mouseMoved(() => {
    boton.style('box-shadow', 'inset 1px 1px 2px #4e9561, inset -1px -1px 2px #6ed389');
  });
  boton.mouseOut(() => {
    boton.style('box-shadow', '1px 1px 2px #4e9561, -1px -1px 2px #6ed389');
  });
  //Posiciono el boton en mi canvas
  // boton.position(0,-10);
  //Cada que el boton sea presionado voy a ejecutar una funcion
  //llamada cambiarDia
  boton.mousePressed(cambiarDia);
}

function draw() {
  background(34, 129, 144 ); 
  
  //Aqui mi círculo y texto toman el valor del arreglo
  //en que se encuentre mi variable contador 

  fill(col[contador]);
  stroke(255);
  strokeWeight(2);
  ellipse(width/2,height/2,asistentes[contador]*10);
  fill(255);
  textSize(20);
  text(asistentes[contador],width/2,height/2);
}
//Esta es una función que estoy creando, es la que se va a llamar
//cuando presiono el boton
function cambiarDia(){
  
//Empleo una condicional, si el contador es menor al tamaño del arreglo asistentes
//El contador incrementará en uno
  if(contador<asistentes.length - 1){
     contador = contador + 1 ;
//De no cumplirse la condición anterior el contador reinicia en 0
  } else {
    contador = 0;
  }
 
 //Imprimir en consola el valor actual de contador.
  console.log(contador);
}
