//Para este ejemplo es necesaria una cuenta en OpenWeatherMap.org y obtener la API KEY

let key = '7c59ef7f3557f92679933dafa19e09fd';//Sustituir por API Key
//URL para descargar clima actual en Ciudad de México
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Mexico&appid='+key+'&units=metric'; 
//Crear variables para guardar datos
let data;
let clima;
//Variable para texto
let texto;

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.parent('main__sketch');
  //Cargo información y una vez cargada ejecuto la función pedirClima()
  loadJSON(url,pedirClima);
  //Formato de texto
  textAlign(CENTER);

}

function draw() {
  background(220);
  //Texto al centro de la pantalla
  text(texto,width/2,height/2);
}

//Esta función se ejecuta una vez que se cargan los datos
function pedirClima(data){
  clima = data;
  console.log(clima);
  //Acceder a la información de temperatura
  let temperatura = clima.main.temp;
  //Concateno el texto a mostrar
  texto = "La temperatura en CDMX es: "+ temperatura+"°C";
}