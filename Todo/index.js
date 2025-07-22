"use strict";
const form = document.querySelector("form");
const todoinput = document.querySelector('#todoinput');
const ul = document.querySelector('#todos-ul');
let allTodo = [];
let todosFromLocalStorage = localStorage.getItem('allTodo');
if (todosFromLocalStorage) {
    allTodo = JSON.parse(todosFromLocalStorage);
    renderTodo();
}
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!todoinput.value.trim())
            return;
        // logic to push todo in todos array
        allTodo.push({ id: Math.random(), text: todoinput.value.trim() });
        localStorage.setItem('allTodo', JSON.stringify(allTodo));
        // console.log('todos --->> ',allTodo)
        renderTodo();
        todoinput.value = '';
    });
}
function renderTodo() {
    ul.innerHTML = '';
    let todosFromLocalStorage = localStorage.getItem('allTodo');
    if (todosFromLocalStorage) {
        allTodo = JSON.parse(todosFromLocalStorage);
    }
    allTodo.forEach((item, index) => {
        const div = document.createElement('div');
        const span = document.createElement('span');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        span.innerText = item.text;
        editBtn.innerText = 'Edit';
        delBtn.innerText = 'Delete';
        editBtn.classList.add('edit-btn');
        editBtn.title = 'Edit this todo';
        delBtn.classList.add('del-btn');
        delBtn.title = 'Delete this todo';
        editBtn.onclick = () => handleEdit(item.id);
        delBtn.onclick = () => handleDel(item.id);
        div.classList.add('single-todo');
        div.appendChild(span);
        div.appendChild(editBtn);
        div.appendChild(delBtn);
        ul.appendChild(div);
    });
}
function handleEdit(id) {
    const p = prompt('Update todo');
    if (p) {
        const todo = allTodo.find(item => item.id === id);
        if (todo) {
            todo.text = p;
            localStorage.setItem('allTodo', JSON.stringify(allTodo));
            renderTodo();
        }
    }
}
function handleDel(id) {
    allTodo = allTodo.filter(item => item.id !== id);
    localStorage.setItem('allTodo', JSON.stringify(allTodo));
    renderTodo();
}
