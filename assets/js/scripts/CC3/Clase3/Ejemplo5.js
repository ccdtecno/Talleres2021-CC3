  ///Este código genera una retícula de objetos cada uno relacionado a un elemento de color
  //en una lista descargada de un repositorio

  //Creo variable para descargar datos
  let data;
  //La dirección de donde obtendré mi archivo JSON, aquí está alojada en un servidor externo
  let url = 'https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/crayola.json';
  //En esta variable guardaré la información descargada
  let colores;

  //Crearé una reticula de 12x10
  let columnas = 12;
  let filas = 10;
  //Variables para guardar el tamaño de cada retpicula
  let ancho,alto;

  //Un arreglo para guardar los objetos de la Clase que crearé
  let bolitas =[];
  //Variable de texto para guardar la etiqueta del fondo, por ahora vacía
  let nombre="";


  function setup() {
    createCanvas(800, 600).parent("sketch-container");
    //Descargo la información con el método loadJSON()
    //Utilizo una función Callback que se ejecutará una vez descargados los datos
    data = loadJSON(url,obtenerDatos);
    //Cálculos de cada  espacio en la retícula
    ancho = width/columnas;
    alto =  height/filas;
    //Quitar contorno a los dibujos
    noStroke();
  
  }

  function draw() {
    background(220);
    //Formato del texto
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(nombre,width/2,height/2);
    
    //Este pedazo de código se ejecuta solamente si existe información en mi arreglo colores
    if(colores){
        //Para cada elemento del arreglo "bolitas" donde b es mi contador
      for(let b in bolitas){
      //Ejecuta la función dibujar de cada bolita
        bolitas[b].dibujar();
        //bolitas[b].mover();
      }
      
    }
  
  }
  //Función que se ejecuta cuando la información está lista
  function obtenerDatos(data){
    console.log(data);
    //Guardo en mi variable colores la información descargada
      colores =  data;
      //Generar un contador para cada elemento del arreglo
      let contador = 0;
      //Primer loop para las columnas 
      for(let i = 0; i<columnas;i++){
    //Segundo loop para las filas
          for(let j = 0; j<filas;j++){
              //Genero un objeto en cada repetición cada uno tiene su posición en x,y, diametro, color y nombre
              bolitas.push(new Bolita(i*ancho+15,j*alto+15,25,colores.colors[contador].hex, colores.colors[contador].color),
    ); 
      //Incrementar contador
      contador++;
        
      }
    }
  }

  //Aquí defino mi clase Bolita, que propiedades tendrá
  class Bolita{
      //El constructor será donde inicio las variables a usar, dentro del paréntesis los argumentos
      //de entrada que podré utilizar
    constructor(_x,_y,_d,_color,_nombre){
      //Esta es la sintáxis para definir cada variable dentro de mi clase
      this.x = _x;
      this.y = _y;
      this.diametro = _d;
      this.color = _color;
      this.nombre = _nombre
      
    }
    //Puedo generar nuevas funciones para cada uno de mis objetos
    //en este caso esta sera utilizada para mostrar en pantalla
    dibujar(){
      //Colorear con la información de color
      fill(this.color);
      //Crear una elipse en cierta posición
      ellipse(this.x,this.y,this.diametro); 
      //Realizo una comparación con dos argumentos, el primero revisa si el mouse está siendo presionado
      //el segundo la distancia entre el mouse y la posición del objeto, si es menor al diámetro.
      //Cuando ambas condiciones se cumplen significa que la bolita está siendo presionada.
      if(mouseIsPressed&&dist(mouseX,mouseY,this.x,this.y)<this.diametro){
          //Si la bolita fue presionada, el nombre en pantalla cambia al de esta bolita
        nombre = this.nombre;
      }
      
    }
    mover(){
      this.x = this.x+random(1);
      this.y = this.y+random(1);
    }
    
  }
