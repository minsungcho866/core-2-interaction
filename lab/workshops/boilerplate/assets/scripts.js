//LOGGING DATA OBJECTS
//-----------------------

//log the costumes array
// console.log('costumes: ',costumes);

//log property with braket notation
// console.log("costumes[0]['title']: ", costumes[0]['title']);

//log property with braket notation
// console.log("costumes[0].title: ", costumes[0].title);


// CONSOLE AND DOCUMENT OBJECTS
// ---------------------------------

//log the console object
// console.log(console);

//log the document object
// console.log(document);

//log the document element 
// console.log(document.documentElement);


//EDITING THE DOCUMENT ELEMENT
// ---------------------------------

// edit directly
// document.documentElement.style.background = 'pink';

// define a new funtion
function setBackgroundColor(color) {
    document.documentElement.style.background = color;
}

//run the function
setBackgroundColor('pink');


//SELCTING ANY HTML ELEMENT
// ---------------------------------

// set main element variable 
var mainElement = document.querySelector('.Main');


// UPDATING AN HTML ELEMENT 
// ---------------------------------

// edit directly
// mainElement.style.background = 'green';
// mainElement.innerHTML = 'Hello World!';

// edit with object property
// mainElement.innerHTML = costumes[15]['title']

// edit with function
function insertCostumeData(costume) {

    // add text to innerHTML
    // mainElement.innerHTML += costume['title'];

    // add template string 
    // mainElement.innerHTML += `
    // <div>
    //     ${ costume['title'] }
    // </div>`
    // ;

    // insert advanced HTML
    mainElement.innerHTML += `
    <artice class="Kirby">
        <h2>${ costume['title'] }</h2>
        <img src="./media/${costume[ 'image'] }" />
        <p>${ costume['powers'] }</p>
    </article>
        `;

}

// manual insertion
// insertCostumeData(costumes[0]);
// insertCostumeData(costumes[1]);
// insertCostumeData(costumes[2]);
// insertCostumeData(costumes[3]);


// FOr EACH LOOPS
// ---------------------------------------

costumes.forEach((costume) => {
    insertCostumeData(costume);
});