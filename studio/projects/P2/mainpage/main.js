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

var data = [
    {
        location: 'Dim Sum Sam',
        item: 'Crispy Pork Belly Rice, Pork Belly Sandwich',
        price: 21.77,
        number_of_people: 1,
        worth: 'This is a Chinese resturant. The price was low but the taste was very good. This restaurant would be one of my favorite one.',
    },
    {
        location: 'H MART',
        item: 'Asian grocery, bag',
        price: 12.53,
        number_of_people: 1,
        worth: 'This is one of the most famous asian market. The price is not cheep but you can buy various asian grocerys(especially Korean grocerys) in person.',
    },
    {
        location: 'GAMMEEOK',
        item: 'Bossam, Bindaetteok, Terra, Saero, Abai Sundae',
        price: 140.79,
        number_of_people: 4,
        worth: 'This is a Korean resturant. The price is high but the tastes is not bad. Many Koreans visited this place atleast once and it is popular but I believe that there are restaurants that is better than this one.',
    },
    {
        location: 'Sala Thai',
        item: 'Tom Yum Koong, Pad Thai, Thai fried Rice, Curry Puffs',
        price: 67.50,
        number_of_people: 2,
        worth: 'The price is not cheep but when compared to the amount of the food, it is fair enough to try. The taste is pretty good and I recommend this restourant.',
    },
    {
        location: 'New Mizu Sushi',
        item: 'Philadelphia Roll, Soda, Tricolor Cuchi Dinner',
        price: 38.54,
        number_of_people: 1,
        worth: 'The price is high but I believe that people who like sushi and rolls would enjoy it.',
    },
    {
        location: 'Hawaiian BBQ',
        item: 'BBQ Mix Box, Kara-age',
        price: 32.06,
        number_of_people: 1,
        worth: 'The price is a little high campared to other hawaiian food restaurants. However, the food was good.',
    },
    {
        location: 'Taco Bell',
        item: 'Cheesy Double Beef Burrito, Nachos BellGrande, Soft Taco, Cheese Roll Up',
        price: 21.54,
        number_of_people: 1,
        worth: 'Its cheap and famous. I personally like this place but I think it would depend on people.',
    },
    {
        location: 'Skyline Grourment Deli',
        item: 'Slice of Orea Cheesecake, Iced Coffee, Chop Cheese, Bacon, Egg, and Cheese Breakfest Sandwich',
        price: 18.67,
        number_of_people: 1,
        worth: 'The price is very low and compared to other delis, the sandwich was very delicious. The taste is simmlar to Big Mac but the price is very cheep.',
    },
    {
        location: 'FIFTYLAN Koreantwon',
        item: 'Brown Sugar Milk Tea(2)',
        price: 19.67,
        number_of_people: 2,
        worth: 'The price was high and conpared to other Milk Tea places I did not found this place compelling. I believe there are cheaper place that taste the same.',
    },
    {
        location: 'And Pizza',
        item: 'Dirty Birdless',
        price: 23.21,
        number_of_people: 1,
        worth: 'The price was not cheap but also not too expensive. The taste was good and I recommend this place.',
    },
    {
        location: 'Panda Express',
        item: 'Plate',
        price: 12.23,
        number_of_people: 1,
        worth: 'This is one of the most famous chinese fusion restaurant. The price is low and I personally like this place.',
    },
    {
        location: 'Zurutto Ramen',
        item: 'Zurutto Deluxe',
        price: 26.45,
        number_of_people: 1,
        worth: 'The price was high but the taste was bad. I do not recommend this place.',
    },
    {
        location: '7th Street Burger',
        item: 'Double Cheeseburger',
        price: 16.86,
        number_of_people: 1,
        worth: 'The price is simmilar to other Burger place but the taste is very good. I highly recommend this place.',
    },
    {
        location: 'Don Poke',
        item: 'Don Poke Bowl',
        price: 28.09,
        number_of_people: 1,
        worth: 'The price is not high and the taste is very good to people who like Poke Bowl.',
    },
    {
        location: 'Joes Pizza',
        item: 'Plain Cheese Pizza',
        price: 38.11,
        number_of_people: 1,
        worth: 'The price is not cheep and because it is famous, it takes time to get the food. I recommend to visit the place near Union square and not the Time square one. it taste that same but has less people.',
    },

    {
        location: 'Hyo Dong Gak',
        item: 'Noodles with Seafood Brown Sauce',
        price: 22.97,
        number_of_people: 1,
        worth: 'I do recommend to people who want to try Brown Sauce Noodles but the price is high.',
    },
    {
        location: 'Soju Haus',
        item: 'Braised Pork Belly Kimchi, Bowl of Rice',
        price: 26.13,
        number_of_people: 1,
        worth: 'This is a Korean restaurant. The price is high but the portions are good.',
    },
    {
        location: 'Mala Project',
        item: 'Mala Dry Pot',
        price: 59.85,
        number_of_people: 2,
        worth: 'The price could look high but the amount of food is very high and the taste is very good.',
    },
    {
        location: 'ROYCE CHOCOLATE',
        item: 'Nama Chocolate "Mild Cacao"',
        price: 26.54,
        number_of_people: 1,
        worth: 'The taste is good and it is good as a gift but the price is high.',
    },
    {
        location: 'Sakura Sushi and Ramen',
        item: 'Fried wonton, Sushi and Sashimi For 2',
        price: 87.18,
        number_of_people: 2,
        worth: 'The price is high but it tastes good and the portions are good.',
    },
    {
        location: 'WingBox',
        item: 'Nashville Hot Honey Rub Wings',
        price: 31.93,
        number_of_people: 2,
        worth: 'I do not recommend this place. The price os high and does not taste good.',
    },
    {
        location: 'Krispy Kreme Doughnuts',
        item: '6 count Original Glazed Doughnuts',
        price: 19.16,
        number_of_people: 1,
        worth: 'The price is not explensive and it taste good.',
    },
    {
        location: 'Kyuramen',
        item: 'Tonkotsu Shouyu Ramen(2)',
        price: 47.69,
        number_of_people: 2,
        worth: 'The price is fair and I would not say that it is the best but the taste is not bad.',
    },
    {
        location: 'Khao Hom Thai',
        item: 'Large Tom Yum Soup, Pad Tahi Noodle, Yellow Curry, Thai Fried Rice, Khao Hom Sweet and Sour',
        price: 104.65,
        number_of_people: 2,
        worth: 'The price is high but you would get a lot of food. I taste was not bad.',
    },
    {
        location: 'Daves Hot Chicken',
        item: 'Daves 4:slider with Fries',
        price: 12.81,
        number_of_people: 1,
        worth: 'The price is simmilar to other chicken sandwich place but it tastes very good.',
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
                                '<strong>Price:</strong> $' + data[index].price.toFixed(2) + '<br>' +
                                '<strong>Number of People:</strong> ' + data[index].number_of_people + '<br>' +
                                '<strong>Worth:</strong> ' + data[index].worth;


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
