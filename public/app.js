var todoInput = document.getElementById("todoInput");
var todoButton = document.getElementById("todoButton");
var todoList = document.getElementById("todoList");


todoButton.addEventListener('click' , addTodo)


function addTodo(event){
    event.preventDefault(); //This prevents the browser from refreshing when the button is submitted //
    // console.log("hellow");

    var todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")

    var newTodo  =document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-li")
    todoDiv.appendChild(newTodo)

    var completedButton = document.createElement('button')
    completedButton.innerHTML = "<i class = 'fas fa-check'></i>"
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)

    var deleteButton = document.createElement('button')
    deleteButton.innerHTML = "<i class = 'fas fa-trash'></i>"
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)

    todoList.appendChild(todoDiv)

    todoInput.value = ""

    deleteButton.addEventListener('click' , function(){
        todoList.removeChild(todoDiv)
    })

    completedButton.addEventListener('click' , function(){
        newTodo.classList.add('task-completed')
    })


}



