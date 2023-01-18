
let botonVolver = document.getElementById("volver-arriba");

function scrollDown() {
    if (document.documentElement.scrollTop > 20) {
        botonVolver.style.display = "block";
    } else {
        botonVolver.style.display = "none";
    }
}

window.onscroll = function() {
    scrollDown()
};

function volverArriba() {
  document.documentElement.scrollTop = 0;
}

