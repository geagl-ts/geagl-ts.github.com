//obtener los elementos de la clase .close
const elementos_close = document.querySelectorAll(".close");

//recorrerlos
elementos_close.forEach((elemento_close) => {
    //agrega un evento click a cada uno de ellos
    elemento_close.addEventListener("click", function (ev) {
        ev.preventDefault();

        let content = document.querySelector(".content");

        //quitar las clases de animacion
        content.classList.remove("animated");
        content.classList.remove("fadeInDown");

        //agreguar animacion de salida
        content.classList.add("animated");
        content.classList.add("fadeOutUp");

        //mandame al inicio pero espera 500 milisegundos
        setTimeout((_) => {
            location.href = "/";
        }, 500);
    });
});
