//En este código vamos a generar un campo donde el usuario pueda
//escribir una ciudad y pedir la temperatura en tiempo real de la misma
//Basado en el ejemplo de Daniel Schiffman en The Coding Train https://www.youtube.com/watch?v=4UoUqnjUC2c&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=6
//Variables para guardar datos
let data;
let clima;

//Separo los distintos elementos que componen mi petición a la API
//en este caso estamos usando Open Weather Mao
let api = 'https://api.openweathermap.org/data/2.5/weather?q='
let ciudad = ''
let llave = '&appid=7cb7c804859763c02bd7d44ce6fc60ba'
let unidades = '&units=metric'
//Hago una concatenación de los textos que conforman mi petición
let url = api + ciudad + llave + unidades;
//Variables para elementos de mi interfaz
let input, boton;


function setup() {
  createCanvas(400, 400);
  //Creo un elemento de input para que el usuario escriba
  input =  createInput();
  input.position(width/2-100,100);
  //Creo el botón para enviar petición
  boton =  createButton('Dame el clima');
  boton.position(width/2 +50,100);
  //Cuándo el usuario presione el botón se va a ejecutar una función
  boton.mousePressed(dameClima);
  //Obtengo mis datos
  loadJSON(url, bajarDatos);
  //Utilizaré un esquema de color Hue Saturation Brightness
  colorMode(HSB);
}

function draw() {
  background(220);
//Si mis datos de clima están disponibles
  if (clima) {
//Obtengo el dato de temperatura
    let temperatura = clima.main.temp;
//Mapeo el rango de colores que busco y genero una visualización simple
//con un círculo y texto 
    let col = map(temperatura, -15, 40, 250, 0);
    fill(col, 100, 100);
    circle(width / 2, height / 2, 100);

    textAlign(CENTER);
    fill(0);
    text(temperatura, width / 2, height / 2);



  }

}
//Esta función descarga los datos y los transfiera a la variable clima
function bajarDatos(data) {
  clima = data;

}
//Esta función se ejecuta cada que el botón es presionado
function dameClima(){
  //Guardamos en la variable ciudad el texto que el usuario ingreso
  ciudad = input.value();
  //Construyo mi mail de petición
  url = api+ciudad+llave+unidades;
  //Vuelvo a pedir los datos
  loadJSON(url,bajarDatos);
}

