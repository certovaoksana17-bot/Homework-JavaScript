const name = "Alex"
console.log(typeof name)

const age = 32
console.log(typeof age)

const isGoodApple = true
const isBadApple = false

console.log(typeof isGoodApple)
console.log(typeof isBadApple)

let x;
console.log(typeof x)

let y = null
console.log(typeof y)

//Хранение данных по значению(примитивные значения)

//В примитивных значениях переменная хранится как она есть

let numberOne = 7 //присваиваем значения переменным
let numberTwo = numberOne

numberTwo = 9 // второй переменной мы присваиваем другое значение

 console.log(numberTwo) //при выведении в консоль мы получаем,
 console.log(numberOne)

//Хранение данных по ссылке(сложные значения)

let user = { name: 'Ольга', age: 25 }
const admin = user

// Переопределение никак не повлияет на admin, потому что мы создали новый объект
user = { name: 'Паша' }

console.log(admin) 
console.log(user) 

