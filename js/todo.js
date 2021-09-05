const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "ToDo";





let toDoData = [];

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoData));
}



function removeToDo(event) {


    const li = event.target.parentElement;
    li.remove();
    toDoData = toDoData.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}




function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "X";

    btn.addEventListener("click", removeToDo);


    li.appendChild(span);
    li.appendChild(btn);
    
    todoList.appendChild(li);
}


function handler(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };

    toDoData.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

todoForm.addEventListener("submit", handler);


const savedToDo = localStorage.getItem(TODO_KEY);


if(savedToDo) {
    const parsedToDo = JSON.parse(savedToDo);
    toDoData = parsedToDo;
    parsedToDo.forEach(paintToDo);
}

