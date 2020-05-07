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
    


//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	let thirdSide = (side1 + side2) - 1
	return thirdSide;
}
nextEdge(8,10);

//Area of a tringle
function triArea(base, height) {
	let area = (base * height) / 2;
	return area;
}
triArea(3,2);

//Find a square of a number
function squared(a) {
	let squaredNum = a*a;
	return squaredNum;
}
squared(5);



//Change hours in to seconds
function howManySeconds(hours){
let calHr= hours  *3600;
return calHr;
}
howManySeconds(2);

// Increment a number by one 
function addition(num) {
	let nextNum=num+1;
	return nextNum;
}
addition(0);



//booleans

let shopping = [
  {
    text: "banana",
    kg: "1kg",
    completed: true
  },
  {
    text: "tomato",
    kg: "2kg",
    completed: false
  },
  {
    text: "orange",
    kg: "1kg",
    completed: true
  }
]

console.log(shopping);

shopping.push({
  text: "onion",
  kg: "1kg",
  completed: false
});
//Add shopping
function addShopping(tobuy){
  shopping.push(tobuy);
}
addShopping(shopping.push({
  text: "pasta",
  kg: "5kg",
  completed: true
})
);

//change shopping
function changeShopping(index,text){
  shopping[index]=text;
}
changeShopping([0],{
  text: "mango",
  kg: "1/2kg",
  completed: true
})


//Delete shopping
function deleteShopping(index,howManyItems){
  shopping.splice(index,howManyItems);
}
deleteShopping(2,1);


//refactoring
function newShopping(newText,newOption,newCompleted=false){
  shopping.push(
    {text: newText,
    kg: newOption,
    completed: newCompleted
  })
}
newShopping("Shirt","S");

//Change key value

function changeKeyValue(index,key,value){
  shopping[index][key]= value;
console.log(shopping);
}
changeKeyValue(1,"text","salade");


//Conditions




//Using the ternary operator create a condition who checks if today is Tuesday


let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
today = (days[1] === 'tuesday') ? 'True' : 'false';



//Equality of 3 Values
function equal(a, b, c) {
  if (a === b && a === c) {
         return 3;
  }
  else if (a === b || a === c || b === c) {
         return 2;
  }
   else{
       return 0;
   }
   }
 equal(1, 2, 3);


 //edabit - Strictly Increasing or Decreasing

 function check(array) {
	for( i=1; i < array.length; i++){
		 if(array[i] <= array[i-1] && array[i] >= array[i+1]){
			return "decreasing";
		 }else if((array[i] > array[i-1])  && array[i] > array[i+1] || array[i] == array[i-1]){
			return "neither";
		} 
		 else {
			return "increasing";
		}
	}
}


//Count genders

let countGender = [
  {
    name: 'selam',
    gender: 'FEMAL'
  },
  {
    name: 'Dani',
    gender: 'MALE'
  },
  {
    name: 'Eva',
    gender: 'FEMAL'
  },
  {
    name: 'Sami',
    gender: 'MALE'
  },
  {
    name: 'Abel',
    gender: 'MALE'
  },
  {
    name: 'Fiori',
    gender: 'FEMAL'
  },
];

for(let i = 0; i <= countGender.length; i++){
   let male = countGender.gender.MALE
   let femal = countGender.gender.FEMAL
      if(countGender.gender[i]=="MALE"){
        return 'male';
      }
      else{
        return 'femal';
      }
      console.log("My list contains " + femal + "girls and" + male + "boys")
      
}


const h1 = document.querySelector('h1');

console.log(h1.innerHTML);