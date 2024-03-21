document.getElementById('high').addEventListener("click", function() {
    var onedollar1 = document.querySelectorAll('.onedollar1');
    var onedollar2 = document.querySelectorAll('.onedollar2');
    var twodollar1 = document.querySelectorAll('.twodollar1');
    var twodollar2 = document.querySelectorAll('.twodollar2');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        onedollar1.forEach(function(element) {
            element.style.display = "none";
        });
        onedollar2.forEach(function(element) {
            element.style.display = "none";
        });
        twodollar1.forEach(function(element) {
            element.style.display = "none";
        });
        twodollar2.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        onedollar1.forEach(function(element) {
            element.style.display = "block";
        });
        onedollar2.forEach(function(element) {
            element.style.display = "block";
        });
        twodollar1.forEach(function(element) {
            element.style.display = "block";
        });
        twodollar2.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
// -----------------------------
document.getElementById('low').addEventListener("click", function() {
    var twodollar1 = document.querySelectorAll('.twodollar1');
    var twodollar2 = document.querySelectorAll('.twodollar2');
    var threedollar1 = document.querySelectorAll('.threedollar1');
    var threedollar2 = document.querySelectorAll('.threedollar2');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        twodollar1.forEach(function(element) {
            element.style.display = "none";
        });
        twodollar2.forEach(function(element) {
            element.style.display = "none";
        });
        threedollar1.forEach(function(element) {
            element.style.display = "none";
        });
        threedollar2.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        twodollar1.forEach(function(element) {
            element.style.display = "block";
        });
        twodollar2.forEach(function(element) {
            element.style.display = "block";
        });
        threedollar1.forEach(function(element) {
            element.style.display = "block";
        });
        threedollar2.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
// -----------------------------
document.getElementById('medium').addEventListener("click", function() {
    var onedollar1 = document.querySelectorAll('.onedollar1');
    var onedollar2 = document.querySelectorAll('.onedollar2');
    var threedollar1 = document.querySelectorAll('.threedollar1');
    var threedollar2 = document.querySelectorAll('.threedollar2');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        onedollar1.forEach(function(element) {
            element.style.display = "none";
        });
        onedollar2.forEach(function(element) {
            element.style.display = "none";
        });
        threedollar1.forEach(function(element) {
            element.style.display = "none";
        });
        threedollar2.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        onedollar1.forEach(function(element) {
            element.style.display = "block";
        });
        onedollar2.forEach(function(element) {
            element.style.display = "block";
        });
        threedollar1.forEach(function(element) {
            element.style.display = "block";
        });
        threedollar2.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
