var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        
        var low = document.querySelectorAll('.low');
        var medium = document.querySelectorAll('.medium');
        var high = document.querySelectorAll('.high');
        
        if (checkedCheckboxes.length === 0) {
            low.forEach(function(element) {
                element.style.display = "block";
            });
            medium.forEach(function(element) {
                element.style.display = "block";
            });
            high.forEach(function(element) {
                element.style.display = "block";
            });
        } else {
            low.forEach(function(element) {
                if (Array.from(checkedCheckboxes).some(cb => cb.id === 'low')) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
            medium.forEach(function(element) {
                if (Array.from(checkedCheckboxes).some(cb => cb.id === 'medium')) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
            high.forEach(function(element) {
                if (Array.from(checkedCheckboxes).some(cb => cb.id === 'high')) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
        }
    });
});

//---------------------------------


