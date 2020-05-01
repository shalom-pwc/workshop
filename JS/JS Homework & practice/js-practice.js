//DAY OF THE WEEK

function dayInWeek(index){

  let days = ['M','T','W','TH','F','ST','S'];
  
  return days[index];
  }
  //console.log(dayInWeek(0));

  //Display Greeting 
  function sayHi(name){

    return " hello " + name;
  
  }
  
  
 // console.log(sayHi('selam'));
 

  //Convert minute to second
  function minToSec(min){
   
    return (min + " mintues + " + (minutes * 60));
  
  }
  //let userVal = prompt("Number of minutes")
 // minToSec(userVal);
  
 // console.log(minToSec(10));





// AREA OF CYLINDER
function calarea(radius,height){
  let pi = 3.14;
  let area = 2 * pi * radius * (radius + height);
   return 'The ' +  ' area ' + ' is ' + area + ' m2. ';
  }
 console.log(calarea(4,10));




//Returns the Remainder from Two Numbers

function remainder(num1, num2){
  let num3 = num1 % num2;
   return num3;
  }
 console.log(remainder(10,3));




   
//Frames Per Second
function  frames ( minutes , fps ) {
  const  fpsRes  =  fps  *  60 ;
  return  minutes  *  fpsRes ;
}
frames(1, 1);




// Extract City Facts

function cityFacts(city) {
  let name = city.name; 
  let population = city.population;
  let continent = city.continent;
  return name + ' has a population of ' + population + ' and is situated in ' + continent;
}





//Calculate the Profit
function profite(sell,cost){
  
  let prof = s-c ;
  return prof;
  }
  console.log(profite(15,10));




//Is the Number Less than or Equal to Zero?
function lessThanZero(input){
  let num = input;
  if(num <= 0){
  
  console.log("True");
  
  }
  else{
  
  console.log("False");
  }
  }
  lessThanZero(1);


//Is the Number Even or Odd?
function oddOrEven(num1, num2){
  let num3 = num1 % num2;

if (num3==0){

console.log("even");

}
else{

console.log("odd");

}
}
    
oddeven(5,7);





//Is the Word Singular or Plural?
function isPlural(word) {
  return character = word.endsWith("s");

if (character=="s"){

console.log("Plural");

}
else{

console.log("singular");

}
}
    
isPlural('change');
    