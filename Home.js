// When the user scrolls down 50px from the top of the document, resize the header's font size and change its content
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "30px";
        document.getElementById("header").innerHTML = "Layla Ferreira";
    } else {
        document.getElementById("header").style.fontSize = "90px";
        document.getElementById("header").innerHTML = "Layla <br> Ferreira";
    }
}