  //Creamos variable global para contener la información
  let data;
  let contador = 0;
  let myFont;
  //El archivo puede tardar en cargar poniéndolo en el método preload
  //aseguramos que  nuestro programa comience una vez que lo cargamos
  function preload() {
    console.log(data);
    myFont = loadFont("../assets/js/scripts/CC3/Clase2/LEMONMILK-Bold.otf");
    data = loadJSON("../assets/js/scripts/CC3/data/data.json");
  }

  setup = () => {
    createCanvas(800, 600).parent("sketch-container");
    textFont(myFont);
    textStyle(BOLD);
    textAlign(CENTER);
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
