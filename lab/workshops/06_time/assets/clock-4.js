var dateObject = new Date;
console.log('dateObject:', dateObject);


var date = dateObject.getDate();
console.log('date:',date);

var dateElement = document.querySelector('.date');
console.log('dateElement:',dateElement);

var dateObject = new Date();
var date = dateObject.getDate();

dateElement.innerHTML = date;




