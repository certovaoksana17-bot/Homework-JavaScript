class Counter {
    #count = 0

    increment() {
        this.#count++
    }

    decrement() {
        this.#count--
    }

    display() {
        console.log(`Текущее значение счетчика: ${this.#count}`)
    }
}

const myCounter = new Counter()

myCounter.increment()
myCounter.increment()
myCounter.display()

myCounter.decrement()
myCounter.display()

class EmailValidator {
    static isValid(email) {
        return typeof email === 'string' && email.includes('@')
    }
}

console.log(EmailValidator.isValid('test@mail.com'))
console.log(EmailValidator.isValid('not_an_email'))
console.log(EmailValidator.isValid(12345))



class Order {
    constructor(items) {
        this.items = items
    }

    #calculateTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0)
    }

    getTotal() {
        const total = this.#calculateTotal()
        return `Общая стоимость заказа: ${total} руб.`
    }
}

const myOrder = new Order ([
    {name:'Ноутбук', price: 50000},
    {name: 'Мышь', price: 1500},
    {name: 'Клавиатура', price: 3000}
])

console.log(myOrder.getTotal())