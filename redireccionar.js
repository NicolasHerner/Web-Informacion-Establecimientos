let contador = document.getElementById("contador");
let conteo = 4;

contador.innerHTML = "Volviendo a la pagina de inicio en 5";

let botonVolver = document.getElementById("volver-arriba");

setInterval(()=>{

    contador.innerHTML = "Volviendo a la pagina de inicio en " + conteo;
    conteo--

    if(conteo < 0) location.replace("./index.html")

},1000);

