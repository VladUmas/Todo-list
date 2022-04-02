const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('description-task');
const todoTask = document.getElementsByClassName('day_task');

let tasks;

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));


function Task(description){
    this.description = description;
    this.completed = false;
}

const createTemplate = (task, index) => {
    return `
        <div class="todo-item">
            <div class="description"> ${task.description} </div>
            <div class="buttons">
                <input class="btn-completed" type="checkbox">
                <button class="btn-delete">Удалить</button>
            </div>
        </div>
    `
}
const HtmlList = () => {
    day_task.innerHTML = "";
    if(tasks.lenght > 0) {
        tasks.forEach((item, index) => {
            day_task.innerHTML += createTemplate(item, index);
        });
    }
}

const updatestorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(taskInput.value));
    updatestorage();
    HtmlList();
})


