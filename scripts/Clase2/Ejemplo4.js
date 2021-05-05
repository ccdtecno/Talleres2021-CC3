//Creamos variable global para contener la información
let data;
let contador = 0;
let myFont;
//El archivo puede tardar en cargar poniéndolo en el método preload
//aseguramos que  nuestro programa comience una vez que lo cargamos
function preload(){
  data =  loadJSON("./scripts/data/data.json")
  myFont = loadFont('./assets/LEMONMILK-Bold.otf');
}

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.parent('main__sketch');
  textFont(myFont);
  
}

function draw() {
    //Disminuimos la velocidad de draw a 1 frame por segundo
  frameRate(1);
  //Si nuestro contador alcanza el final de elementos, se reinicia
  if(contador>=data.colors.length){
    contador = 0;
  }
  
  fill(255);
  textSize(40);
  textStyle(BOLD);
  //Pintamos el fondo con el color de la base de datos
  background(data.colors[contador].hex);
  
  //Utilizamos el texto con el color de la base de datos
  text(data.colors[contador].color,width/2,height/2)
  contador++;
  
  noStroke();
  fill(random(200,250),80);
  rect(random(160,200),90,40,120);
  rect(width/2,height/2 + random(100,150), 300, 20);
}
