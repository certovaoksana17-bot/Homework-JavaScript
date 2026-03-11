let todos = JSON.parse(localStorage.getItem('my_todos')) || []
let currentFilter = 'all'

const todoInput = document.querySelector('#todoInput')
const addBtn = document.querySelector('#addBtn')
const todoList = document.querySelector('#todoList')
const filterBtns = document.querySelectorAll('.filters button')

async function fetchInitialTodos() {
    if (todos.length === 0) {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            const data = await res.json()
            todos = data.map(t => ({ id: Date.now() + Math.random(), text: t.title, completed: t.completed }))
            saveAndRender()
        } catch (e) {
            console.error("Ошибка загрузки", e)
        }
    } else {
        render()
    }
}

function addTodo() {
    const text = todoInput.value.trim()
    if (!text) return
    todos.push({ id: Date.now(), text, completed: false})
    todoInput.value = ''
    saveAndRender()

}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id)
    saveAndRender()
}

function toggleTodo(id) {
    todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    saveAndRender()
}

function setReminder(text) {
    const seconds = prompt('Через сколько секунд напомнить?')
    if (seconds > 0) {
        alert(`Напоминание установлено на ${seconds} сек.`)
        setTimeout(() => {
            alert(`Напоминание: ${text}`)
        }, seconds * 1000)
    }
}

function saveAndRender() {
    localStorage.setItem('my_todos', JSON.stringify(todos))
    render()
}

function render() {
    todoList.innerHTML = ''

    const filtered = todos.filter(t => {
        if (currentFilter === 'active') {
            return !t.completed
        }
        if (currentFilter === 'completed') {
            return t.completed
        }
        return true
    })

    filtered.forEach(todo => {
        const div = document.createElement('div')
        div.className = `todo-item ${todo.completed ? 'completed' : ''}`
        div.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
            <span>${todo.text}</span>
            <button class="btn-remind" onclick="setReminder('${todo.text.replace(/'/g, "&apos;")}')">⏰</button>
            <button class="btn-del" onclick="deleteTodo(${todo.id})">🗑️</button>
        `;
        todoList.appendChild(div)
    });
}

addBtn.onclick = addTodo
todoInput.keydown = (e) => e.key === 'Enter' && addTodo()

filterBtns.forEach(btn => {
    btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        currentFilter = btn.dataset.filter
        render()
    }
})

document.querySelector('#clearAllBtn').onclick = () => {
    localStorage.removeItem('my_todos');
    todos = [];
    render();
};

fetchInitialTodos()