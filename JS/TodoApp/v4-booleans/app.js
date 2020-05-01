
let todos = {

    /* TODO LIST - Global scope
    ---------------------------------- */
    todoList : [
      {
        text: "shower",
        completed: false
      },
      {
        text: "eating",
        completed: false
      },
      {
        text: "sleep",
        completed: false
      },
      {
        text: "call",
        completed: false
      }
      
    ],

    /*display to do
    ------------------------- */
    displayTodos: function () {
      console.log(this.todoList)
    },
    /* ADD TODO
    ------------------------- */
    addTodo: function(text) {
      this.todoList.push(text);
      this.displayTodos();
    },
    /* CHANGE TODO
------------------------- */
    changeTodo: function(index,text){
      this.todoList[index]= text;
      this.displayTodos();
    },

    /* DELET TODO
    ------------------------- */
    deleteTodo: function(index, num = 1) {
      this.todoList.splice(index, num);
      this.displayTodos();
    }

};

//console.log(todos.todoList[0].text);
//console.log(todos.todoList[0].completed);

//show(todos.todoList);



/* PRACTICE AREA
-------------------------------- */
/* let _myList = [
  
 ["learn css", '2020.04.31' , true];
 ["learn css", '2020.04.31' , true];
 ["learn css", '2020.04.31' , true];


];
show(myList[1][1]); */

let myList = [
  
  {
    text: "learn CSS",
    deadline: "2020.04.31",
    completed: true
  },

  {
    text: "learn Javascript",
    deadline: "2020.05.15",
    completed: false
  },

  {
    text: "learn PHP",
    deadline: "2020.05.15",
    completed: false
  }

];

show(myList[0]['deadline']); //square  braquets notatio
show(myList[0].deadline); // dot notation


myList[1].completed = true;
show(myList[1]);

myList.splice(1,1);


myList.push({
    text: "learn PYTHON",
    deadline: "2021.05.15",
    completed: false
});

function addlist(obj){
  myList.push(obj);
 show(myList);
}
addlist( {
  text: "learn selu",
  deadline: "2020.05.15",
  completed: false
}
);



function changelist(index,text){
  myList[index]= text;
 show(myList);
}

changelist(0,{
  text: "learn shalom",
  deadline: "2020.05.15",
  completed: false
});

//refactoring
function addlist(newText,newDeadline,newCompleted=false){
  myList.push({
     text: newText,
     deadline: newDeadline,
     completed: newCompleted
  })
}
addlist("learn html","2020.05.15");
show(myList);

function deletelist(index, deleteN=1){
  myList.splice(index, deleteN)
}

show(myList.length, "list length");
//delete everithing after specifide index
//deleteTodo(1,myList.length);
//show(myList);

 
function changekeyValue(index, key, value){
  // The ke is an argument and should be used inside bracket
 //otherwise with the dot notaion, the key will be consider as a real key
 //mylist[index].key = value; // wrong
  myList[index][key] = value; //good
}

// In order to
changekeyValue(1, "text", "dani");
show(myList);


//v4
 /* addlist: function(newText,newCompleted=false){
  this.todos.push({
     text: newText,
     completed: newCompleted
  });
  this.displayTodos();
}
  */



 let cityFacts = {

    name:"Asmara",
    population:1000000,
    continent:"Africa",

    displayCityFacts: function(){
      console.log(cityFacts.name + ' has a population of ' + cityFacts.population + ' and is situated in ' + cityFacts.continent);
    }
 }
 

cityFacts.displayCityFacts();