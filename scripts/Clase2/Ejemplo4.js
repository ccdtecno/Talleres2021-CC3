//Creamos variable global para contener la información
let data;
let contador = 0;
//El archivo puede tardar en cargar poniéndolo en el método preload
//aseguramos que  nuestro programa comience una vez que lo cargamos
function preload(){
  data =  loadJSON("./scripts/data/data.json")
}

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.parent('main__sketch');
}

function draw() {
    //Disminuimos la velocidad de draw a 1 frame por segundo
  frameRate(1);
  //Si nuestro contador alcanza el final de elementos, se reinicia
  if(contador>=data.colors.length){
    contador = 0;
  }
  //Pintamos el fondo con el color de la base de datos
  background(data.colors[contador].hex);
  //Utilizamos el texto con el color de la base de datos
  text(data.colors[contador].color,width/2,height/2)
  contador++;
}