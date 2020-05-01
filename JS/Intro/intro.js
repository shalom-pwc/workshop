/* COMMENTS
-------------------------------*/
//This is single comments
/*
This is a block 
comment
----------------------------*/


/* VARIABLES 
-------------------------------*/
/* NAMING RULES
--------------------------------------*/

//1. No spaces eg. str ing
//2. you cannot start with numbers eg. 1 str = "hfghf"
//3. you cannot use dashes or operators eg. my-str minus
//4. you cannot use "reserve keywords" eg. let functons
let str = "My name is selam ?"; 
const num = 9;
var good = false;


/* NAMING BEST PRACTICES
   Camel Case  !
------------------------------ */
let my_name = "selam";
let myName = "Bob"; // only start with small letter
let someHeadsAreGonnaRoll = "judas priest song";


/*  JS IS CASE SENSITIVE
--------------------------------*/
let name = "Selam"
// not the same as this
let Name = "Selam"


/* A VAR. IT'S CONTAINER
 * It can contain EVERYTHING
-------------------------*/
let number = (9+9) -(3*5) ; // numbers
let text = "bela bela"; //strings
let cond = true; //booleans
let data = [1,2,3,"bob"]; //array
let object = {
     name: "John",
     age: 23 
}; 



/* STRINGS
------------------------------ */
let str1 = "I'm 18 years of age.";
let str2 = 'I\'m 18 years of age.'; //escape character

//in JS we concatinate with plus sign
let str3 = "I'm " + 35;

let person = "bob";
let age = 32;
let phrase = person + " is " + age + " years old";//bob is 32 years old

//console.log(phrase);

//NATIVE STRING METHODS

let txt = "Apple 'is' red";
let txtLength = txt.length; // console.log(txtLength);

let txt2   = "Beatles";// console.log(txt2.split(""));
let txt5   = "Selamawit";//console.log(txt5.split(""));
let txt3   = "Powercoders"; //console.log( txt3.substr(5, 5) );

/* NUMBERS
------------------------------ */
let int        = 92; //integer
let negative   = -92; //negative
let float      = 1.5; // float
let calculate  = 8 + 2; //console.log(calculate);
let calc2      = 2 + 3 * 10; //console.log(calc2);//32
let calc3      = (2 + 3) *10; //50
let calc4      = -2 + (-2); //console.log(calc4);

let rand       = Math.random() * 10; // console.log(rand);
let randInt    = Math.round(2.7) * 10;//console.log(randInt);
let roundCeil  = Math.ceil(1.2); //console.log(roundCeil);
let roundFloor = Math.floor(1.2); //console.log(roundFloor);

//Modulo opretator
let remainder;
//let remainder = 110 % 60; console.log(remainder);
remainder = 10 % 3;// console.log(remainder);



/* ARRAY (LISTS)
------------------------------------------------*/
let arr1 = [1,2,3,4,5]; //console.log(arr1);
let arr2 = ["sorin", "jane", "selam"]; //console.log(arr2);
//console.log(arr2[2]);

//NATIVE ARRAY METHODS
//arr2.push("bob");console.log(arr2);
//console.log( arr2.length );
//arr2.pop(); console.log(arr2);// delete LAST element
//arr2.shift(); console.log(arr2);// delete first element
//arr2.unshift(); console.log(arr2);// add first element 
//arr2.splice(1,1); console.log(arr2);//delete

//using splice method to add
//arr2.splice(2,0,"dani");
arr2.splice(3,0,"evana");
//console.log(arr2);

//change a value inside
arr2[2]= "rahel"; //console.log(arr2);
arr2.unshift("eva"); //console.log(arr2);





/* FUNCTION
------------------------------------------------*/
function calculateAge(name, birthyear) {

   //let name = "Selam";
   let date = new Date();
   let currentYear = date.getFullYear(); //console.log(currentYear);
   let age = currentYear - birthyear; //currentYear - 1989; 

   //return name + " is " + age + " years old!";

   //nothing will be display after first return
   /* let bob = 56;
   return bob; */ //NOTHING WILL DISPLAY
}
/* console.log( calculateAge("Dani", 1988) );
console.log( calculateAge("Selam", 1989) );
console.log( calculateAge("Eva", 2018) );  */

//calculateAge("Dani", 1988);


// Return day of the  week based on a number
/* function dayOfTheWeek(index){
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "sunday"];
    return days;

} */
//console.log(dayOfTheWeek());

/* function sayHello(input){
   return " Hello " + " ";
}
console.log( sayHello("Hello",selam)); */

function minToSec(minutes){
   let userVal = prompt("Number of minutes");
    return minutes + "minutes =" + (minutes * 60) + " seconds";
}
//console.log(minTosec(userVal));

function minToSec(minutes){
   let userVal = prompt("Number of minutes");
   //console.log(minutes + "minutes =" + (minutes * 60) + " seconds");
}
//minToSec(userVal);




/* OBJECTS
---------------------------------- */
//Name,gender ,age, country
let persons = {
   
   bob: {
      name : "Bob Geldof",
      gender : "man",
      age : 68,
      country : "Uk"
   },
   marc: {
    name : "marco van",
    gender : "man",
    age : 45,
    country : "Holland"
  },
  nadia: {
    name : "nadia com",
    gender : "man",
    age : 45,
    country : "Romania"
  }

};
console.log(persons.marc.name);


/* 
console.log(person_name);
console.log(person_name['name']);
console.log(person_name.name);  //dot notation */


