var animes = JSON.parse(localStorage.getItem("animesjson"));
var vectorimagenes = JSON.parse(localStorage.getItem("imagenesjson"));

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

//mandando el valor de 0 para cargar los capitulos
var temporadacodigo = 0;
localStorage.setItem("tempcodigo", temporadacodigo);

const formulario = document.querySelector("#formulario");
formulario.addEventListener("keyup", filtrar);

function filtrar() {
  var contenedoranime = document.querySelector(".contenido");
  contenedoranime.innerHTML = "";
  let nombre;
  const texto = formulario.value.toLowerCase();
  if (texto.length < 3) {
    contenedoranime.innerHTML = "";
  } else {
    for (let i = 0; i < animes.length; i++) {
      nombre = animes[i].name.toLowerCase();
      if (nombre.indexOf(texto) !== -1) {
        enlace =
          "desc.html?nomb='" +
          encodeURIComponent(animes[i].name) +
          "'&cod='" +
          encodeURIComponent(animes[i].fld_id) +
          "'";
        contenedoranime.innerHTML +=
          "<a href=" +
          enlace +
          " class='video'><div class='dentro'><img loading='lazy' src='https://i.ibb.co/" +
          sacarurl(animes[i].name) +
          "' class='imagen'/><h4>'" +
          animes[i].name +
          "'</h4></div></a>";
      }
    }
  }
}
/*function cargarcontenido(inicio) {
    var numero = [];
    var nombre;
    var contenedoranime = document.querySelector(".contenido");
    contenedoranime.innerHTML = "";
    if (inicio * 12 > animes.length) {
      for (let i = inicio * 12 - 12; i < animes.length; i++) {
        numero.push(animes[i].name);
        enlace =
          "desc.html?nomb='" +
          encodeURIComponent(animes[i].name) +
          "'&cod='" +
          encodeURIComponent(animes[i].fld_id) +
          "'";
        contenedoranime.innerHTML +=
          "<a href=" +
          enlace +
          " class='video'><div class='dentro'><img loading='lazy' src='https://i.ibb.co/" +
          sacarurl(animes[i].name) +
          "' class='imagen'/><h4>'" +
          animes[i].name +
          "'</h4></div></a>";
      }
    } else {
      for (let i = inicio * 12 - 12; i < inicio * 12; i++) {
        numero.push(animes[i].name);
        enlace =
          "desc.html?nomb='" +
          encodeURIComponent(animes[i].name) +
          "'&cod='" +
          encodeURIComponent(animes[i].fld_id) +
          "'";
        contenedoranime.innerHTML +=
          "<a href=" +
          enlace +
          " class='video'><div class='dentro'><img loading='lazy' src='https://i.ibb.co/" +
          sacarurl(animes[i].name) +
          "' class='imagen'/><h4>'" +
          animes[i].name +
          "'</h4></div></a>";
      }
    }
  }*/
