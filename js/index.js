//Funcion para pasar a la siguiente pagina
setTimeout(
  (jsonimagenes = async () => {
    try {
      //ingresando a la api de imagenes
      const resPostimg = await axios(
        "https://script.google.com/macros/s/AKfycbyFEOR8gOIJcpD9NKgFdpdKB29TgU1ZUjJZgrnet72TIrSu_-fHJxnaTxlbJtG3f-pYwA/exec"
      );
      var imagen = resPostimg.data.imagenes;
      var jsoimagenes = JSON.stringify(imagen);
      localStorage.setItem("imagenesjson", jsoimagenes);

      //ingresando a la api de animes
      const resPostname = await axios(
        "https://script.google.com/macros/s/AKfycbxP7k3j2_7fNgpZXV2TepCtcZgYtsju6mWzNG_PCD-DJu2LLHUltNKtp2gLwD_i-PU2nw/exec"
      );
      var animes = resPostname.data.datos;
      var jsoanimes = JSON.stringify(animes);
      localStorage.setItem("animesjson", jsoanimes);

      var inicio = 1;
      localStorage.setItem("inicio", inicio);

      //Cambiando de pagina
      location.href = "inicio.html";
    } catch (error) {
      console.log(error);
    }
  }),
  500
);
