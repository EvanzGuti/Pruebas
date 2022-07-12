var animes = JSON.parse(localStorage.getItem("animesjson"));
var vectorimagenes = JSON.parse(localStorage.getItem("imagenesjson"));
console.log(animes.length);
var paginas = Math.ceil(animes.length / 12);

function anterior() {
  var can = parseInt(localStorage.getItem("inicio")) - parseInt(1);
  localStorage.setItem("inicio", can);
  if (localStorage.getItem("inicio") == 0) {
    localStorage.setItem("inicio", 1);
  }
  cargarcontenido(localStorage.getItem("inicio"));
}

function siguiente() {
  var can = parseInt(localStorage.getItem("inicio")) + parseInt(1);
  localStorage.setItem("inicio", can);
  cargarcontenido(localStorage.getItem("inicio"));
}

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

/*<a href="desc.html?nomb='Boku no Hero Academia'&cod='58543'"
        >Descripcion</a
      >*/
function cargarcontenido(inicio) {
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
  console.log(numero[2]);
}

if (localStorage.getItem("inicio") == 1) {
  cargarcontenido(1);
} else {
  cargarcontenido(localStorage.getItem("inicio"));
}

//click al boton anterior
document.querySelector(".anterior").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//click al boton siguiente
document.querySelector(".siguiente").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
