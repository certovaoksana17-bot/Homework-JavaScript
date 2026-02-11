const form = document.querySelector('.person')
const displayArea = document.querySelector('#displayArea')

function displayContact() {
    const rawData = localStorage.getItem('userContact')

    if (rawData) {
        const contact = JSON.parse(rawData)

        document.getElementById('outName').textContent = contact.name
        document.getElementById('outPhone').textContent = contact.phone
        document.getElementById('outEmail').textContent = contact.email
        displayArea.style.display = 'block'
    } else {
        displayArea.style.display = 'none'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault() //отменяет перезагрузку страницы


    const contactObject = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    }

    localStorage.setItem('userContact', JSON.stringify(contactObject))

    form.reset()
    displayContact()
})

document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('userContact')
    displayContact()
})

displayContact()






let expenses = JSON.parse(localStorage.getItem('expenses')) || []

function renderExpenses() {
    const list = document.getElementById('expenseList')
    list.innerHTML = ''


    expenses.forEach((item, index) => {
        const div = document.createElement('div')
        div.className = 'expense-item'
        div.innerHTML = `
    <span><strong>${item.amount} руб. </strong> - ${item.description} <small>(${item.date})</small></span>
    <button class="delete-btn" onclick="deleteExpense(${index})">Удалить</button>
    `;
        list.appendChild(div)
    })
}

function addExpense() {
    const description = document.getElementById('desc').value
    const amount = document.getElementById('amount').value
    const date = document.getElementById('date').value

    if (!description || !amount || !date) return alert('Заполните все поля')

    const newExpense = { description, amount, date }
    expenses.push(newExpense)
    localStorage.setItem('expenses', JSON.stringify(expenses))

    renderExpenses()

    document.getElementById('desc').value = ''
    document.getElementById('amount').value = ''
}

function deleteExpense(index) {
    expenses.splice(index, 1)
    localStorage.setItem('expenses', JSON.stringify(expenses))
    renderExpenses()
}

renderExpenses()




let activeTime = parseInt(sessionStorage.getItem('activeTime')) || 0

const timerDisplay = document.getElementById('timer')

function updateTimer() {
    activeTime++;
    timerDisplay.innerText = activeTime;
    sessionStorage.setItem('activeTime', activeTime)
}

setInterval(updateTimer, 1000)

timerDisplay.innerText = activeTime