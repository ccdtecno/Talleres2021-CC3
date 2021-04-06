//Guardar número de asistentes por día en un arreglo
//El arreglo va a ser una variable llamada asistentes
let asistentes = [15,13,10,12];

//Todo el código dentro de la función setup va a ejecutarse una
//sola vez al inicializarse el código
function setup() {
   //Creamos nuestro espacio de trabajo 800 de ancho y 800 de alto 
  createCanvas(800, 800);
  
}
//Todo el código que incluyamos  en draw se va a ejecutar 30 veces por segundo
function draw() {
  //Definimos el fondo y su color en escala de grises (0-255)  
  background(220);
  //Iniciamos un bucle para crear cada círculo
  //El bucle comienza en 0 y avanza de uno en uno hasta llegar a el 
  //tamaño de mi arreglo asistentes
  for(let i = 0;i<=asistentes.length; i++){

    //Utilizo mi contador i para ir creando cada círculo con sus dimensiones 
    //y etiqueta de texto. Voy recorriendo en cada iteración cierto número de pixeles
    ellipse(i*200+100,height/2,asistentes[i]*10);
    text(asistentes[i],i*200+100,height/2);
  }
 
}

