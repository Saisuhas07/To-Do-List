
const taskInput = document.getElementById('task');
const enterButton = document.querySelector('button');
const taskList = document.getElementById('List');


function add(taskValue){
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        deleteTaskFromLocal(taskValue)
    });

    listItem.appendChild(deleteButton);

    
    taskList.appendChild(listItem);

    
}
function addTask() {
    const taskValue = taskInput.value.trim(); 
    
    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }
    add(taskValue)

    saveTaskToLocal(taskValue) 
    
    taskInput.value = '';
    
}
function saveTaskToLocal(taskValue) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocal(taskValue) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((task) => task !== taskValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasksFromLocal() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => add(task)); 
}
window.onload = loadTasksFromLocal;
enterButton.addEventListener('click', addTask);


