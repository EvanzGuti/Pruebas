var videocode;
function obtenercodigoycargarvideo() {
  const valores = window.location.search;
  const parametrosurl = new URLSearchParams(valores);
  let nomb = parametrosurl.get("video");
  const nom = nomb.split("'");
  videocode = nom[1];

  var contenedorvideo = document.querySelector(".reproductor");
  contenedorvideo.innerHTML = "";
  contenedorvideo.innerHTML +=
    "<iframe frameborder='0' height='100%' width='100%' allow='gyroscope' <iframe allowfullscreen='' allow='gyroscope' frameborder='' height='640' onload='$('.iframe-loading').css('background-image', 'none');' sandbox='allow-same-origin allow-scripts' scrolling='no' src='https://uqload.org/embed-" +
    videocode +
    ".html' style='border: none;' width='100%'></iframe></iframe>";
}

obtenercodigoycargarvideo();

/*<iframe frameborder='0' height='100%' width='100%' <iframe allowfullscreen='' frameborder='' height='640' onload='$('.iframe-loading').css('background-image', 'none');' sandbox='allow-same-origin allow-scripts' scrolling="no" src="https://uqload.org/embed-56y7viuwr8sl.html" style="border: none;" width="100%"></iframe></iframe>*/
