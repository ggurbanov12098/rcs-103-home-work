document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value;
        const li = createTaskElement(taskText);

        taskList.appendChild(li);
        storeTask(taskText);

        taskInput.value = '';
    }
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerText = taskText;
    li.draggable = true;

    li.appendChild(createButton('Edit', 'edit-button', () => editTask(li, taskText)));
    li.appendChild(createButton('Delete', '', () => {
        removeTask(taskText);
        li.remove();
    }));

    ['dragstart', 'dragover', 'drop', 'dragend'].forEach(event => {
        li.addEventListener(event, handleDragEvent);
    });

    return li;
}

function createButton(text, className, onClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.className = className;
    button.onclick = onClick;
    return button;
}

function storeTask(taskText) {
    let tasks = getStoredTasks();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskText) {
    let tasks = getStoredTasks();
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getStoredTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
    const taskList = document.getElementById('task-list');
    getStoredTasks().forEach(taskText => {
        taskList.appendChild(createTaskElement(taskText));
    });
}

function editTask(taskElement, oldTaskText) {
    const newTaskText = prompt("Edit your task:", oldTaskText);
    if (newTaskText && newTaskText.trim()) {
        taskElement.childNodes[0].nodeValue = newTaskText;
        updateTaskInStorage(oldTaskText, newTaskText);
    }
}

function updateTaskInStorage(oldTaskText, newTaskText) {
    let tasks = getStoredTasks();
    const taskIndex = tasks.indexOf(oldTaskText);
    if (taskIndex !== -1) {
        tasks[taskIndex] = newTaskText;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateStorage() {
    const taskElements = document.querySelectorAll('#task-list li');
    const tasks = Array.from(taskElements).map(taskElement => taskElement.childNodes[0].nodeValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

let draggedElement = null;

function handleDragEvent(event) {
    switch (event.type) {
        case 'dragstart':
            draggedElement = event.target;
            event.target.classList.add('dragging');
            break;
        case 'dragover':
            event.preventDefault();
            const afterElement = getDragAfterElement(event.clientY);
            const taskList = document.getElementById('task-list');
            if (afterElement == null) {
                taskList.appendChild(draggedElement);
            } else {
                taskList.insertBefore(draggedElement, afterElement);
            }
            break;
        case 'drop':
            event.preventDefault();
            draggedElement.classList.remove('dragging');
            updateStorage();
            break;
        case 'dragend':
            event.target.classList.remove('dragging');
            break;
    }
}

function getDragAfterElement(y) {
    const taskElements = [...document.querySelectorAll('#task-list li:not(.dragging)')];

    return taskElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        return (offset < 0 && offset > closest.offset) ? { offset, element: child } : closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
