
const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let ultimoSliderSection = sliderSection[sliderSection.length -1];

const btnIzquierda = document.getElementById("btn-izquierda");
const btnDerecha = document.getElementById("btn-derecha");

slider.insertAdjacentElement("afterbegin", ultimoSliderSection);

function siguienteImagen() {
    let primerSliderSection = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft =  "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", primerSliderSection)
        slider.style.marginLeft = "-100%";
    }, 500);
}

function anteriorImagen() {
    sliderSection = document.querySelectorAll(".slider-section");
    ultimoSliderSection = sliderSection[sliderSection.length -1];
    slider.style.marginLeft =  "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", ultimoSliderSection)
        slider.style.marginLeft = "-100%";
    }, 500);
}