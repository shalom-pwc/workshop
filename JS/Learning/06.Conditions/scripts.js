/* CONDITIONS
-------------------------------*/
let num = 5; 
let num2 = 20;

// COMPARISON OPRATER
// > greater than
// < less than
// >= greater 
// <=
// ==
// ===equal to and the same type
// !=
// !== not equal and not the same type

//A SIMPLE CONDITION
if ( num > 6) {
    console.log("TRUE");
}
else {
   console.log("FALSE");
}

// A STRICT EQUALITY CHECK CONDITION "5"
if (num === 5) {
   console.log("TRUE")
}
else {
   console.log("FALSE!")
}

//A DOUBLE CHECK with "OR"
//  one of the condition must be true
if(num > 5 || num2 < 30) {
   console.log("double check", "TRUE")
}

//A DOUBLE CHECK with "AND"
//both of the condition must be true
if(num > 5 && num2 < 30){
   console.log("double check", "true")
}

// Using not operator
if(num != "5") {
   console.log("not opr: TRUE");
}

//COMPLEX CHECKS
        //FALSE                       //TRUE
if((num === 5 && num > 5) || (num2 == 20 || num2 > 20)){
   console.log("complex cond: True");
}

// CHALLENGE

function message(userhour= null){
let date = new Date();
 let hr = date.getHours();
 /* let m = today.getMinutes();
  let s = today.getSeconds(); */
   if(hr < 8){
      console.log("What are you doing that early?");
   
   }
   else if(hr>=8 && hr<12){
      console.log("Good morning");
   }
   if(hr>=12 && hr<17){
      console.log("Good afternoon");
   }
   if(hr>=17 && hr<21){
      console.log("Good evening");
   }
   if(hr>=21){
      console.log("Good night");
   }
 
}
message(15);
message();


/* ELSE IF
----------------------------- */
let numb = 15;
let output = "";

if(numb > 15){
   output = "FALSE 1";
}
else if(numb >= 15){
   output = "TRUE 1";
}
else if(numb === '15'){
   output = "FALSE 2";
}
else if(numb === 15){
   output = "FALSE 2";
}
else {
   output ="Not met true"
}



// CHALLENGE
function messageBetter(customHour = null) {


   //1. Initialize variables :
   let hour    = false; //
   let output  = "";    //empty string
 
 
   //2. IF "customHour" HAVE a value, use the value of "customHour"
   if(customHour) {
     hour = customHour;
   }
 
   //ELSE → "customHour" DO NOT have a value, use this :
   else {
     let date = new Date();
     hour = date.getHours(); //show(hour);
   }
 
 
   //3. CONDITIONS
   if(hour < 8) {
     output = "What are you doing that early?";
   }
   else if(hour >= 8 && hour < 12) {
     output = "Good morning!";
   }
   else if(hour >= 12 && hour < 17) {
     output = "Good afternoon!";
   }
   else if(hour >= 17 && hour < 21) {
     output = "Good evening!";
   }
   else if(hour >= 21 && hour <=24) {
     output = "Good night!";
   }
   else {
      output = "Not sure what hour u typed"
   }
 
 
   //4. OUTPUT
   console.log("Hour message:", output);
 
 
 }

 messageBetter(150);
 
 // message(); //empty argument = function will use JS hour
 // message(9); //with an argument, function will use this value
 // message(12);
 // message(15);
 // message(18);
 // message(21);


 /* THE BANG OPERATER (Logical Not)
  ----------------------------------------------------*/
  let n = 56;
  let bool = false;

  console.log( n != 56); //false
  console.log( bool != 56); //false


  let num5 = 25;
  if(num5 >= 25){
     output = "TRUE"
  }
  else {
     output = "FALSE"
  }
  Console.log(output);


/* ternary opreter */
  output = (num5 >= 25) ? "TRUE MATE" : "FALSE";
  if(output = true){

  }


  /* THE SWICTH STATMENT
  ----------------------------------- */
  let day = new Date.getDay(); //console.log(day);
// The Switch - "day"
  switch(day) {

   case 0 :
   /* case "" ://OR
   case 15 ://OR */
      output = "Sunday"
   break;

   case 1 :
      output = "Monday"
   break;
   case 2 :
      output = "Tusday"
   break;
   case 3 :
      output = "Wednesday"
   break;
   case 4 :
      output = "Thursday"
   break;
   case 5 :
      output = "Friday"
   break;
   case 6 :
      output = "Saturday"
   break;
   
   default:
      output = "Don't know "
   break;
  }
  console.log();