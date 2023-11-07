window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 100) { // Cambia 100 al valor que desees
        header.style.opacity = "0.0"; // Cambia la opacidad al valor deseado
    } else {
        header.style.opacity = "1";
    }
});
