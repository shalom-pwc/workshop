
let todos = {

    /* TODO LIST - Global scope
    ---------------------------------- */
    todoList : [
      "shower",
      "eating",
      "sleep",
      "call"
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

todos.displayTodos();
todos.addTodo("test");
todos.deleteTodo(1);
todos.changeTodo(2, "exam");

