class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getInfo() {
        return `"${this.title}", автор: ${this.author}, страниц: ${this.pages}.`
    }
}

const myBook = new Book("Мастер и Маргарита", "Михаил Булгаков", 480)
console.log(myBook.getInfo())

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Пользователь: ${this.name}, Email: ${this.email}`)
    }
}

const user1 = new User('Алексей', 'alex@example.com')
const user2 = new User('Мария', 'masha@web.ru')
const user3 = new User('Дмитрий', 'dima_dev@js.org')

user1.displayInfo()
user2.displayInfo()
user3.displayInfo()

class Rectangle {
    constructor (width, height) {
        this.width = width;
        this._height = height
    }
    get perimeter () {
        return 2 * (this.width + this._height)
    }

    get height() {
        return this._height
    }

    set height(value) {
        if (value > 0) {
            this._height = value
        } else {
            console.error('Ошибка: Высота должна быть больше 0!')
        }
    }
}

const rect = new Rectangle(10, 5)

console.log(`Периметр: ${rect.perimeter}`)

rect.height = 10
console.log(`Новый периметр: ${rect.perimeter}`)

rect.height = -5
console.log(`Высота осталась прежней: ${rect.height}`)