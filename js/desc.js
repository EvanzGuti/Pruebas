var vectorimagenes = JSON.parse(localStorage.getItem("imagenesjson"));
var nombre;
var codigo;

//funcion para recuperar el nombre del anime y el codigo de la carpeta
//contenedora de las temporadas o peliculas
function NombreCodigo() {
  const valores = window.location.search;
  const parametrosurl = new URLSearchParams(valores);
  let nomb = parametrosurl.get("nomb");
  const nom = nomb.split("'");
  nombre = nom[1];
  let codi = parametrosurl.get("cod");
  const cod = codi.split("'");
  codigo = cod[1];
}

//Sacando el nombre y el codigo
NombreCodigo();

//Funcion para sacar la url de la imagen
function sacarurl(nombre) {
  for (var i in vectorimagenes) {
    nom = vectorimagenes[i].nombre;
    if (nombre == nom) {
      var url = vectorimagenes[i].url;
      break;
    } else {
      var url = "719LLRw/Fondo.jpg";
    }
  }
  return url;
}

//Funcion para poner la imagen y nombre
function ponerimgnombre(nombre) {
  var contenedorimagen = document.querySelector(".contimgdiv");
  contenedorimagen.innerHTML =
    "<img src='https://i.ibb.co/" +
    sacarurl(nombre) +
    "'><div class='titulo'><h3 class='text'>" +
    nombre +
    "</h3></div>";
}
//Poniendo imagen y nombre
ponerimgnombre(nombre);
