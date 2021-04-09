//Creamos un objeto de javascript para contener la información de cada día
//Los  objetos llevan una estructura de 
let asistentes =  [
  {
    cantidad: 12,
    fecha: "Miércoles 14 de Abril,2021 ",
    tema : "Ejercicio de integración",
    col: '#e28fe3',
    
  },
  {
    cantidad: 10,
    fecha: "Lunes 12 de Abril,2021",
    tema: "API's y búsqueda",
    col: 'red',
     
  },
   {
    cantidad: 11,
    fecha: "Miércoles 7 de Abril,2021 ",
    tema : "Archivos JSON",
    col: '#2ce8e8',
  
  },
  {
    cantidad: 15,
    fecha: "Lunes 5 de Abril,2021",
    tema: "Introducción",
    col: 'gold',
    
  }
]
  
  


function setup() {
  createCanvas(800, 400);
  textAlign(CENTER);
  textFont('Arial');
  
  
}

function draw() {
  background(0);
  noStroke();
  for(let i = 0; i<asistentes.length; i++){
   
    fill(asistentes[i].col);
    ellipse(i*200+70,height/2,asistentes[i].cantidad*10);
    fill(255);
    textStyle(NORMAL);
    textSize(10);
    text(asistentes[i].fecha,i*200+70,height/2);
    textSize(15);
    textStyle(BOLD);
    text(asistentes[i].cantidad,i*200+70,height/2-100);
  }
}