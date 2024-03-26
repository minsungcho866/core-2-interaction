document.getElementById('high').addEventListener("click", function() {
    var low = document.querySelectorAll('.low');
    var medium = document.querySelectorAll('.medium');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        low.forEach(function(element) {
            element.style.display = "none";
        });
        medium.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        low.forEach(function(element) {
            element.style.display = "block";
        });
        medium.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
// -----------------------------
document.getElementById('medium').addEventListener("click", function() {
    var low = document.querySelectorAll('.low');
    var high = document.querySelectorAll('.high');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        low.forEach(function(element) {
            element.style.display = "none";
        });
        high.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        low.forEach(function(element) {
            element.style.display = "block";
        });
        high.forEach(function(element) {
            element.style.display = "block";
        });
    }
});
// -----------------------------
document.getElementById('low').addEventListener("click", function() {
    var medium = document.querySelectorAll('.medium');
    var high = document.querySelectorAll('.high');
    
    if (this.checked) {
        // If the checkbox is checked, hide the images
        high.forEach(function(element) {
            element.style.display = "none";
        });
        medium.forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        // If the checkbox is unchecked, show the images
        high.forEach(function(element) {
            element.style.display = "block";
        });
        medium.forEach(function(element) {
            element.style.display = "block";
        });
    }
});

//---------------------------------

var data = [
    {
        location: 'H MART',
        item: 'Asian grocery, bag',
        price: 12.53,
    },
    {
        location: 'GAMMEEOK',
        item: 'Bossam, Bindaetteok, Terra, Saero, Abai Sundae',
        price: 140.79,
    },
    {
        location: 'Sala Thai',
        item: 'Tom Yum Koong, Pad Thai, Thai fried Rice, Curry Puffs',
        price: 67.50,
    },
    {
        location: 'New Mizu Sushi',
        item: 'Philadelphia Roll, Soda, Tricolor Cuchi Dinner',
        price: 38.54,
    },
    {
        location: 'Hawaiian BBQ',
        item: 'BBQ Mix Box, Kara-age',
        price: 32.06,
    },
    {
        location: 'Taco Bell',
        item: 'Cheesy Double Beef Burrito, Nachos BellGrande, Soft Taco, Cheese Roll Up',
        price: 21.54,
    },
    {
        location: 'Skyline Grourment Deli',
        item: 'Slice of Orea Cheesecake, Iced Coffee, Chop Cheese, Bacon, Egg, and Cheese Breakfest Sandwich',
        price: 18.67,
    },
    {
        location: 'FIFTYLAN Koreantwon',
        item: 'Brown Sugar Milk Tea',
        price: 19.67,
    },
    {
        location: 'And Pizza',
        item: 'Dirty Birdless',
        price: 23.21,
    },
    {
        location: 'Dim Sum Sam',
        item: 'Crispy Pork Belly Rice, Pork Belly Sandwich',
        price: 21.77,
    },
    {
        location: 'Panda Express',
        item: 'Plate',
        price: 12.23,
    },
    {
        location: 'Zurutto Ramen',
        item: 'Zurutto Deluxe',
        price: 26.45,
    },
    {
        location: '7th Street Burger',
        item: 'Double Cheeseburger',
        price: 16.86,
    },
    {
        location: 'Don Poke',
        item: 'Don Poke Bowl',
        price: 28.09,
    },
    {
        location: 'Joes Pizza',
        item: 'Plain Cheese Pizza',
        price: 38.11,
    },

    {
        location: 'Hyo Dong Gak',
        item: 'Noodles with Seafood Brown Sauce',
        price: 22.97,
    },
    {
        location: 'Soju Haus',
        item: 'Braised Pork Belly Kimchi, Bowl of Rice',
        price: 26.13,
    },
    {
        location: 'Mala Project',
        item: 'Mala Dry Pot',
        price: 59.85,
    },
    {
        location: 'ROYCE CHOCOLATE',
        item: 'Nama Chocolate "Mild Cacao"',
        price: 26.54,
    },
    {
        location: 'Sakura Sushi and Ramen',
        item: 'Fried wonton, Sushi and Sashimi For 2',
        price: 87.18,
    },
    {
        location: 'WingBox',
        item: 'Nashville Hot Honey Rub Wings',
        price: 31.93,
    },
    {
        location: 'Krispy Kreme Doughnuts',
        item: '6 count Original Glazed Doughnuts',
        price: 19.16,
    },
    {
        location: 'Kyuramen',
        item: 'Tonkotsu Shouyu Ramen',
        price: 47.69,
    },
    {
        location: 'Khao Hom Thai',
        item: 'Large Tom Yum Soup, Pad Tahi Noodle, Yellow Curry, Thai Fried Rice, Khao Hom Sweet and Sour',
        price: 104.65,
    },
    {
        location: 'Daves Hot Chicken',
        item: 'Daves 4:slider with Fries',
        price: 12.81,
    },
];
// Function to display data when hovering over elements with specified class
function displayDataOnHover(className, data) {
    var elements = document.querySelectorAll('.' + className);
    
    elements.forEach(function(element, index) {
        element.addEventListener('mouseover', function(event) {
            // Create a div to display data
            var tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = '<strong>Location:</strong> ' + data[index].location + '<br>' +
                                '<strong>Item:</strong> ' + data[index].item + '<br>' +
                                '<strong>Price:</strong> $' + data[index].price.toFixed(2);
            
            // Apply styles to the tooltip
            tooltip.style.position = 'absolute';
            tooltip.style.marginLeft = '20vw'; 
            tooltip.style.backgroundColor = 'white'; // Set background color
            tooltip.style.border = '1px solid #ccc'; // Add border
            tooltip.style.padding = '5px'; // Add padding
            
            // Append tooltip to body
            document.body.appendChild(tooltip);
        });
        
        element.addEventListener('mouseout', function() {
            // Remove the tooltip when mouse leaves the element
            var tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Call the function for each class
displayDataOnHover('low', data);
displayDataOnHover('medium', data);
displayDataOnHover('high', data);
