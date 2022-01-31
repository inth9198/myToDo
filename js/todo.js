const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#toDoInput");
const dateInput = toDoForm.querySelector("#date");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function calculateDate(date){
    const setDate = new Date(`${date}T00:00:00+0001`);
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance/(1000*60*60*24));
    return day;
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const dateSpan = document.createElement("span");
    const nDate = calculateDate(newTodo.date);
    dateSpan.innerText=" D-day " + nDate;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(dateSpan);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newDate = dateInput.value;
    toDoInput.value = "";
    dateInput.value = "";
    const newToDoObj = {
        text: newTodo,
        date: newDate,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const paresedToDos = JSON.parse(savedToDos);
    toDos = paresedToDos;
    paresedToDos.forEach(paintToDo);
}
