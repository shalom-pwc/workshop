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

function message(){
let date = new Date();
 let hr = date.getHours();
 /* var m = today.getMinutes();
  var s = today.getSeconds(); */
   if(hr < 8){
      console.log("What are you doing that early?");
   
   }
   else{
      console.log("hi");
   }
 
}
message();