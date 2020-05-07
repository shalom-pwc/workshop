/* FOR LOOPS
--------------------------------------------- */



//console.log(names);

let num = 10;
//Classic loop:
//1st part = initialization
//2nd part = condition when u want to stop
//3rd part = incremenentaion
for( let i = 0; i <= 10; i++){
   //console.log(i);
}


let names = ["james", "Julia", "Shalom"]

for(let i = 0; i < names.length;  i++){
   //console.log(names[i]);
}



//CHALLENGE
//1. Display the numbers between 20 and 30
for(let i = 20; i <= 30; i++){
  // console.log(i)
}

//2. Given this array
let todos = [
   {
     text: "Learn JS",
     completed: true
   },
   {
     text: "Learn PHP",
     completed: false
   },
   {
     text: "Learn Python",
     completed: false
   }
 ];

/*  for(let i=0; i <= todos.length; i++){
   // console.log(todos[i].text + ": " + todos[i].completed)
    //let text = todos[i].text
    let completed = todos[i].completed;
   
    //short way
    let displayStatus = (completed === true) ? "Done" : "Todo..";



 }
  */


 /* FOREACH LOOPS
--------------------------------------------- */
// we call the function argumaent "closure" or "anonymus function"

todos.forEach(function(item){
   console.log(item.text)
})

function bob(item){
   console.log(item.text)
}

todos.forEach(bob)