var animes = JSON.parse(localStorage.getItem("animesjson"));
console.log(animes.length);
var paginas = Math.ceil(animes.length / 12);

function anterior() {
  var can = parseInt(localStorage.getItem("inicio")) - parseInt(1);
  localStorage.setItem("inicio", can);
  if (localStorage.getItem("inicio") == 0) {
    localStorage.setItem("inicio", 1);
  }
  console.log(localStorage.getItem("inicio"));
}

function siguiente() {
  var can = parseInt(localStorage.getItem("inicio")) + parseInt(1);
  localStorage.setItem("inicio", can);
  console.log(localStorage.getItem("inicio"));
}

/*<a href="desc.html?nomb='Boku no Hero Academia'&cod='58543'"
        >Descripcion</a
      >*/
