// STRINGS
// -----------------------

console.log('\n\nSTRINGS\n\n\n');

console.log('A string with single quotes'); // single quote 
console.log("A string with double quotes"); // double quotes
console.log(`A string with back ticks`); // back tick
console.log('A ' + 'string '+ 'in ' + 'pieces '); //concatenatoin

//NUMBERS
// -----------------------

console.log('\n\nNUMBERS\n\n\n');

console.log(3); //number
console.log(3 + 3); //add
console.log(3 - 3); //subtract
console.log(3 * 3); //mulriplication
console.log(3 / 3); //divide
console.log(10 % 3) //modulo

//STRINGS & NUMBERS 
//-------------------------

console.log('\n\nSTRINGS & NUMBERS\n\n\n');

console.log('100 * 50'); //numbers in a string 
console.log('100 * 50 equals ' + 100*50); //adding number to a string 
console.log(100 * 50 + '25'); //adding string to a number
console.log(`The year was ${ 2024-333 } 300 years ago.`);// templets   

//BoOLEAN
//-------------------------

console.log('\n\nBOOLEANS\n\n\n');

console.log(true, false); //ture and flase 
console.log('3 <  4 : ', 3 < 4); //lessthan
console.log('4 > 10 : ', 4 > 10); //greater than
console.log('2 >= 2 : ',2 >= 2); //greater than or equal to 
console.log('6 <= 3 : ', 6 <= 3); //less than or equal to 
console.log('8 + 2 == 5 + 5 : ', 8 + 2 == 5+5); //equal to 
console.log("'tomato' != 'tomato'",'tomato' != 'vegitable'); //unequal to 

//VARIABLES
//-----------------------

console.log('\n\nVARIABLES\n\n\n');

var studentLoanDebt = 800;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt :', studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt :', studentLoanDebt);

//ARRAYS
//-----------------------

console.log('\n\nARRAYS\n\n\n');

var myFavoriteColors = [
    'yellowgreen', 
    'fuchsia', 
    'gainsboro'
];
console.log('myFavoriteColors: ', myFavoriteColors);
console.log('myFavoriteColors[1] : ', myFavoriteColors[1])

//OBJECTS
//-----------------------

console.log('\n\nOBJECTS\n\n\n');

var me = {
    firstName: 'Minsung', 
    lastName: 'Cho',
    age: 20, 
    lieksMayo: false,
};
console.log('me : ', me);
console.log("me['firstName'] :", me['firstName']); // bracket Notation

//ARRAY OF OBJECTS
//-----------------------

console.log('\n\nARRAY OF OBJECTS\n\n\n');

var us = [
    {
        firstName: 'Jennifer',
        lastName: 'Lee',
        
    },
    {
        firstName: 'Minsung',
        lastName: 'Cho',
    },
    {
        firstName: 'Bryant',
        lastName: 'wells',   
    },
];

console.log(us);
console.log(us[0]);
console.log(us[0]['lastName']);