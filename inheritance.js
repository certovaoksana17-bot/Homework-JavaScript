class Person {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name)
        this.course = course
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`)
    }
}

const student = new Student('Иван', 3)
student.introduce()

console.log(Student.prototype)
//если у метода нет у обьекта, JS ищет его в прототипе, если нет в прототипе - ищет в прототипе прототипа и так далее до самого верхнего(Object)



class Employee extends Person {
    constructor(name, position) {
        super(name)
        this.position = position
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}`)
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и моя должность - ${this.position}`)
    
    }
}

const worker = new Employee('Андрей', 'Разработчик')

worker.introduce()
worker.work()



const Vehicle = {
    move: function() {
        console.log('Транспортное средство движется')
    }
}

const Car = Object.create(Vehicle)

Car.drive = function() {
    console.log('Машина едет по дороге')
}

Car.drive()
Car.move()

console.log(Object.getPrototypeOf(Car) === Vehicle)