//alert("its working");
//confirm("its working");
//prompt("its working");


/* TODO LIST - Global scope
---------------------------------- */
let todoList = [
  "shower",
  "eating",
  "sleep",
  "call"
];

/*display to do
------------------------- */
function displayTodos() {
   //Local scope
   //let bob = 5;

   console.log(todoList);
}

displayTodos();

/* ADD TODO
------------------------- */
function addTodo(text){
  todoList.push(text);
  displayTodos();
}
addTodo("my new to do");

/* CHANGE TODO
------------------------- */
function changeTodo(index,text){
 todoList[index]= text;
  displayTodos();
}
changeTodo(3,'food');
changeTodo(1,'great job')

/* DELET TODO
------------------------- */
function deleteTodo(index, num = 1) {
  todoList.splice(index, num);
  displayTodos();
}
deleteTodo(0);//if you have default no need to specfiy deleteTodo(0)




