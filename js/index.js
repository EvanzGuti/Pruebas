//Funcion para pasar a la siguiente pagina
setTimeout(
  (jsonimagenes = async () => {
    try {
      //ingresando a la api de imagenes
      const resPost = await axios(
        "https://script.google.com/macros/s/AKfycbyFEOR8gOIJcpD9NKgFdpdKB29TgU1ZUjJZgrnet72TIrSu_-fHJxnaTxlbJtG3f-pYwA/exec"
      );
      var imagen = resPost.data.imagenes;
      var jsoimagenes = JSON.stringify(imagen);
      localStorage.setItem("imagenesjson", jsoimagenes);
      location.href = "inicio.html";
    } catch (error) {
      console.log(error);
    }
  }),
  4000
);
