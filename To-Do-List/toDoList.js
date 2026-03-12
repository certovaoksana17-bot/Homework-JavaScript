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

    const id = Date.now() + Math.floor(Math.random() * 10000)

    todos.push({ id, text, completed: false})
    todoInput.value = ''
    saveAndRender()

    todoInput.focus()
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
        
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', () => toggleTodo(todo.id))

        const span = document.createElement('span')
        span.textContent = todo.text

        const remindBtn = document.createElement('button')
        remindBtn.className = 'btn-remind'
        remindBtn.textContent = '⏰'
        remindBtn.addEventListener('click', () => setReminder(todo.text))

        const delBtn = document.createElement('button')
        delBtn.className = 'btn-del'
        delBtn.textContent = '🗑️'
        delBtn.addEventListener('click', () => deleteTodo(todo.id))

        div.append(checkbox, span, remindBtn, delBtn)
        todoList.appendChild(div)
    });
}

addBtn.onclick = addTodo
todoInput.onkeydown = (e) => e.key === 'Enter' && addTodo()

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