var key = '4736f251050e11586814b18466bcaa52';
var zip = 10011;

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;

fetch(URL)
    .then((response) => {
        return response.json();
    }) 
    .then((data) => {
        render(data);
    })


function render(data) {

    var containerElement = document.querySelector('.Container');
    var infoElement = document.querySelector('.Info');

    infoElement.innerHTML = `
        <p>Temp: ${ data.main.temp }F</p>
    `;

    containerElement.style.background = `hsl(${ data.main.temp }, 100%, 50%)`;

    console.log(data);
}

