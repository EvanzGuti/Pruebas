/* Variables */
var nomani;
var codcarp;
var urlimg;
var contenedorimagen = document.querySelector(".contimgdiv");

/* Funciones */

//funcion para recuperar el nombre del anime y el codigo de la carpeta
//contenedora de las temporadas o peliculas
function NombreCodigo() {
  const valores = window.location.search;
  const parametrosurl = new URLSearchParams(valores);
  let nombre = parametrosurl.get("nomb");
  const nom = nombre.split("'");
  nomani = nom[1];
  let codigo = parametrosurl.get("cod");
  const cod = codigo.split("'");
  codcarp = cod[1];
}

const imgrecup = async (nomani) => {
  try {
    //ingresando a la api de imagenes
    const resPost = await axios(
      "https://script.google.com/macros/s/AKfycbyFEOR8gOIJcpD9NKgFdpdKB29TgU1ZUjJZgrnet72TIrSu_-fHJxnaTxlbJtG3f-pYwA/exec"
    );
    //guardando en un vector todas las imagenes de la api
    var imgvec = resPost.data.imagenes;
    for (var i in imgvec) {
      nombre = imgvec[i].nombre;
      url = imgvec[i].url;
      if (nombre == nomani) {
        urlimg = url;
      }
    }
    ponerimg(urlimg, nomani);
  } catch (error) {
    console.log(error);
  }
};

function ponerimg(urlimg, nomani) {
  contenedorimagen.innerHTML =
    "<img src='" +
    urlimg +
    "'><div class='titulo'><h3 class='text'>" +
    nomani +
    "</h3></div>";
}

var contenedorbotones = document.querySelector(".tempel");
function ponerbotones(codcarp) {}

NombreCodigo();
imgrecup(nomani);
ponerbotones(codcarp);
