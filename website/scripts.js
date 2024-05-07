
    document.addEventListener("DOMContentLoaded", function() {
        var studioButton = document.querySelector('.studio');
        var studioProjectButton = document.querySelector('.studioproject');
        var studioWorkshopButton = document.querySelector('.studioworkshop');
        var labButton = document.querySelector('.lab');
        var labProjectButton = document.querySelector('.labproject');
        var labWorkshopButton = document.querySelector('.labworkshop');
        var arenaButton = document.querySelector('.arena');
        var allImages = document.querySelectorAll('.images img');
        var studioImages = document.querySelectorAll('.studios');
        var studioProjectImages = document.querySelectorAll('.studiop');
        var studioWorkshopImages = document.querySelectorAll('.studiow');
        var labImages = document.querySelectorAll('.labs');
        var labProjectImages = document.querySelectorAll('.labp');
        var labWorkshopImages = document.querySelectorAll('.labw');
        var arenaImages = document.querySelectorAll('.arenas');


        studioButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show studio images
            for (var i = 0; i < studioImages.length; i++) {
                studioImages[i].style.display = 'block';
            }
        });

        studioProjectButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show studio project images
            for (var i = 0; i < studioProjectImages.length; i++) {
                studioProjectImages[i].style.display = 'block';
            }
        });

        studioWorkshopButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show studio workshop images
            for (var i = 0; i < studioWorkshopImages.length; i++) {
                studioWorkshopImages[i].style.display = 'block';
            }
        });

        labButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show lab images
            for (var i = 0; i < labImages.length; i++) {
                labImages[i].style.display = 'block';
            }
        });

        labProjectButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show lab project images
            for (var i = 0; i < labProjectImages.length; i++) {
                labProjectImages[i].style.display = 'block';
            }
        });

        labWorkshopButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show lab workshop images
            for (var i = 0; i < labWorkshopImages.length; i++) {
                labWorkshopImages[i].style.display = 'block';
            }
        });

        arenaButton.addEventListener('click', function() {
            // Hide all images
            for (var i = 0; i < allImages.length; i++) {
                allImages[i].style.display = 'none';
            }
            // Show arena images
            for (var i = 0; i < arenaImages.length; i++) {
                arenaImages[i].style.display = 'block';
            }
        });
    });

