var vectorimagenes = JSON.parse(localStorage.getItem("imagenesjson"));
var nombre;
var codigo;
var codigo1;

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

//verificar si existe parametro en el json
function existe(obj, key) {
  return obj.hasOwnProperty(key);
}

var ntemp = [];
var ntempcod = [];
var temord = [];
var ncap = [];
var ncod = [];
var capord = [];

//sacando las temporadas y capitulos
jsondatos = async (id) => {
  try {
    //ingresando a la api de imagenes
    const resPostimg = await axios(
      "https://script.google.com/macros/s/AKfycbxP7k3j2_7fNgpZXV2TepCtcZgYtsju6mWzNG_PCD-DJu2LLHUltNKtp2gLwD_i-PU2nw/exec?&fld_id=" +
        id
    );
    var datos = resPostimg.data.datos;
    if (existe(datos[0], "name")) {
      //temporadas
      for (let i = 0; i < datos.length; i++) {
        ntemp.push(datos[i].name);
        temord.push(datos[i].name);
        ntempcod.push(datos[i].fld_id);
      }
      temord.sort();
      agregartemporadas();
    } else {
      //capitulos
      for (let i = 0; i < datos.length; i++) {
        ncap.push(datos[i].title);
        capord.push(datos[i].title);
        ncod.push(datos[i].file_code);
      }
      capord.sort();
      agregarcapitulos();
    }
  } catch (error) {
    console.log(error);
  }
};

jsondatos(codigo);

//agregar temporadas
function agregartemporadas() {
  var orde = [];
  for (let i = 0; i < temord.length; i++) {
    for (let j = 0; j < ntempcod.length; j++) {
      if (temord[i] == ntemp[j]) {
        //renombrar
        var palabras = [];
        palabras = temord[i].split(" ");
        if (palabras.length == 2) {
          var texto = "Peli ";
          if (palabras[1] == "subtitulado") {
            texto += "Sub";
          } else {
            texto += "Lat";
          }
          orde.push(texto);
        } else {
          var texto = "Temp " + palabras[1] + " ";
          if (palabras[2] == "subtitulado") {
            texto += "Sub";
          } else {
            texto += "Lat";
          }
          orde.push(texto);
        }
        orde.push(ntempcod[j]);
        break;
      }
    }
  }
  //agregando los botones de temporadas
  var contenedortempo = document.querySelector(".tempel");
  contenedortempo.innerHTML = "";
  for (let i = 0; i < orde.length; i = i + 2) {
    contenedortempo.innerHTML +=
      "<a class='tem' onclick='jsondatos(" +
      orde[i + 1] +
      ")'>" +
      orde[i] +
      "</a>";
  }

  ntemp = [];
  ntempcod = [];
  temord = [];
}

//agregar capitulos
function agregarcapitulos() {
  var orde = [];
  for (let i = 0; i < capord.length; i++) {
    for (let j = 0; j < ncod.length; j++) {
      if (capord[i] == ncap[j]) {
        if (capord[i].charAt(0) == "E") {
          var texto = "Especial ";
          var cap = capord[i];
          texto += cap.slice(1);
          orde.push(texto);
        } else {
          if (capord[i].charAt(0) == "O") {
            var texto = "Ova ";
            var cap = capord[i];
            texto += cap.slice(1);
          } else {
            var texto = "Capitulo " + capord[i];
          }
          orde.push(texto);
        }
        orde.push(ncod[j]);
        break;
      }
    }
  }
  //agregar los botones de capitulos
  var contenedorcapitulos = document.querySelector(".capitulos");
  contenedorcapitulos.innerHTML = "";
  for (let i = 0; i < orde.length; i = i + 2) {
    enlace = "reprod.html?video='" + encodeURIComponent(orde[i + 1]) + "'";
    contenedorcapitulos.innerHTML +=
      "<div class='cap'><a  href=" +
      enlace +
      " class='capi' >" +
      orde[i] +
      "</a></div>";
  }
  ncap = [];
  ncod = [];
  capord = [];
}
