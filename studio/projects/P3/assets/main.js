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

    var containerElement = document.querySelector('html');
    var infoElement = document.querySelector('html');
    // containerElement.style.background = data.main.temp > 50 ? '	rgb(210, 43, 43)' : 'skyblue';
    console.log(data);

    var frame = Math.floor(data.main.temp);
    var imageSource = `imgs/title/title_000${ frame }.jpg`;
    document.querySelector('.title').src = imageSource;

    var frame = Math.floor(data.main.temp);
var imageSource = `imgs/firstimage/firstimage_000${ frame }.png`;
document.querySelector('.trainimage').src = imageSource;

var frame = Math.floor(data.main.temp);
var imageSource = `imgs/subtitleone/subtitleone_000${ frame }.png`;
document.querySelector('.titletwo').src = imageSource;

var frame = Math.floor(data.main.temp);
var imageSource = `imgs/subtitletwo/subtitletwo_000${ frame }.png`;
document.querySelector('.subtitlethree').src = imageSource;

    console.log(imageSource);
}
