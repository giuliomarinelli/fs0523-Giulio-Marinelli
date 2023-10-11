let newTask = document.getElementById('newTask');
let createTask = document.getElementById('createTask');
let tasks = document.getElementById('tasks');
createTask.addEventListener('click', (e) => {
    e.preventDefault();
    let ora = new Date();
    let createNewTask = document.createElement('li');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let div = document.createElement('div');
    div.classList.add('del-btn-container');
    let delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Elimina';
    p1.innerText = newTask.value;
    p2.innerText = `Aggiunta il giorno ${ora.getDate()}/${ora.getMonth() + 1}/${ora.getFullYear()} alle ore ${ora.getHours()}:${ora.getMinutes()}:${ora.getSeconds()}`;
    createNewTask.classList.add('task');
    div.append(delBtn);
    createNewTask.append(p1, p2, div);
    newTask.value = '';
    tasks.prepend(createNewTask);
    let taskList = document.querySelectorAll('.task');
    let delBtns = document.querySelectorAll('.del-btn');
    console.log(delBtns);
    taskList.forEach(taskItem => taskItem.addEventListener('click', () => taskItem.classList.add('completed')));
    delBtns.forEach(delBtn => delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        delBtn.parentElement.parentElement.remove();
    }))
})
