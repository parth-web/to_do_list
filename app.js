//selectors
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const filterOption= document.querySelector(".filter-todo");
//event listener
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCheck);
//functions
 function addtodo(event){
    //prevent form from submitting
    event.preventDefault();
    //    ...  
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
    const todoLi = document.createElement("li");
    todoLi.innerText= todoInput.value; 
    todoLi.classList.add("todo-item");
    todoDiv.appendChild(todoLi);
    //chceck mark btn
    const completedButton= document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
   // trash mark
    const trashButton= document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    //append to list 
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value="";
 }

 function deleteCheck(e){
    const item = e.target;
    if (item.classList[0]=== "trash-button") {
       const todo= item.parentElement;
       todo.classList.add("fall");
       todo.addEventListener("transitionend",function(){
         todo.remove();
       });
       
    }
    //checkmark
    if (item.classList[0]==="complete-button") {
       const todo= item.parentElement;
       todo.classList.toggle("completed");

       
    }


 }
 function filterTodo(evt){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
      switch(evt.target.value){
         case "all":
 
         case "completed":
            if (todo) {
               
            }
      }
    });

 }




