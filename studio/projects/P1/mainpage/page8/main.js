document.querySelectorAll('.button')[0].addEventListener("click", function() {
    var elements = document.querySelectorAll('.color');
    elements.forEach(function(element) {
        if (element.style.color === "red") {
            element.style.color = "black";
        } else {
            element.style.color = "red";
        }
    });
});

document.querySelectorAll('.two')[0].addEventListener("click", function() {
    var elements = document.querySelectorAll('.colortwo');
    elements.forEach(function(element) {
        if (element.style.color === "rgb(212, 0, 255)") {
            element.style.color = "black";
        } else {
            element.style.color = "rgb(212, 0, 255)";
        }
    });
});