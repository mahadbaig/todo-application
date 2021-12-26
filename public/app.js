var todoInput = document.getElementById("todoInput");
var todoButton = document.getElementById("todoButton");
var todoList = document.getElementById("todoList");
var delAll = document.getElementById("delAll");
var todoContainer = document.getElementById("todoContainer")

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7_qsTQdtI_P_0oICfCeZ8N_L5S4Ha8eI",
        authDomain: "todo-application-mahadbaig.firebaseapp.com",
        databaseURL: "https://todo-application-mahadbaig-default-rtdb.firebaseio.com",
        projectId: "todo-application-mahadbaig",
        storageBucket: "todo-application-mahadbaig.appspot.com",
        messagingSenderId: "310863383702",
        appId: "1:310863383702:web:0615282790296870d8c6b7"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    

    // console.log(key);

todoButton.addEventListener('click' , addTodo)
delAll.addEventListener('click' , deleteAll)

function deleteAll(event){
    event.preventDefault();
    todoContainer.innerHTML = ""
    app.database().ref("/addition").remove()
}


function addTodo(event){
    event.preventDefault(); //This prevents the browser from refreshing when the button is submitted //
    // console.log("hellow");

    if (todoInput.value === "") {
        alert("Enter Correct Value")
        
    } else {
        var key = app.database().ref("/").push().key
        
        var setData = {
            list:todoInput.value,
            key:key
        }
        app.database().ref("addition").child(key).set(setData)
    }
        
    }

      app.database().ref("addition").on("child_added" , function(data){
          console.log(data.val().list)

          var todoDiv = document.createElement('div')
          todoDiv.classList.add("todo")
      
          var newTodo  =document.createElement('li')
          todoInput.value = data.val().list
          newTodo.innerText = todoInput.value;
          newTodo.classList.add("todo-li")
          todoDiv.appendChild(newTodo)
      
          var completedButton = document.createElement('button')
          completedButton.innerHTML = "<i class = 'fas fa-check'></i>"
          completedButton.classList.add("complete-btn")
          todoDiv.appendChild(completedButton)
      
          var deleteButton = document.createElement('button')
          deleteButton.innerHTML = "<i class = 'fas fa-minus-circle'></i>"
          deleteButton.classList.add("delete-btn")
          todoDiv.appendChild(deleteButton)
      
          todoList.appendChild(todoDiv)
      
          todoInput.value = ""
      
         deleteButton.setAttribute('onclick' , "delTodo(this)")
         deleteButton.setAttribute("id" , data.val().key)
      
          completedButton.addEventListener('click' , function(){
              newTodo.classList.add('task-completed')
          })
      })
        
    function delTodo(e){
        // console.log(e.parentNode)
        e.parentNode.remove()
        app.database().ref("addition").child(e.id).remove()
    }
    


    




