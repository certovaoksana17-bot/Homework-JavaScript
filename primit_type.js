let name = 'JavaScript is fun!'
console.log(name.includes("fun"))


let colors = ["Красный", null, "Синий", "Голубой", 0]/*здесь 2 значения falsy и только они выводятся на консоль*/
const falseColors = colors.filter(element => !element)
console.log(falseColors) /* если falsy значения удалить, то в консоль ничего не выведется*/

const firstName = "John"
const lastName =  "Doe"
const occupation = "software developer"
const greeting = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}`

console.log(greeting)

console.log(null == undefined) /* при не строгом равенстве не проверяется тип операндов, они оба имеют значение отсутствия, проэтому true*/
console.log(null === undefined)/* при строгом равенстве проверяется тип операндов, object не равен undefined */

console.log(typeof null) /* null имеет тип данных object, что считается исторической ошибкой */
console.log(typeof undefined) /* undefined имеет тип undefined */

console.log(1 + '1')
/* 1 - является числовым типом данных, а '1' - строковым типом. Когда один из операндов является строкой
/* то JS думает, что я хочу обьединить строки и он преобразует числовые значения в строковый тип, потом их обьединяет и получается 11*/