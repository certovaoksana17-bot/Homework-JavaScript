const x = 2
console.log(x * x + x)

const sinValue = Math.sin(54)
const cosValue = Math.cos(16)
const roundedNum = Math.round(sinValue * cosValue)** 2
console.log(roundedNum)

const sqrt1 = Math.sqrt(13.2 * 71.90)
const division = 2.4 / (7 ** 4)
const sqrt2 = Math.sqrt(49)
const roundedNumber = Math.round(16 * sqrt1 / division + 3 ** sqrt2) * 2 ** 7
console.log(roundedNumber)

const isNum = (num) => num % 2 === 0;
let number1 = 51
let number2 = 82
if (isNum(number1)) {
    console.log(number1 + " является четным числом.");
} else {
    console.log(number1 + " является нечетным числом.");
}
if (isNum(number2)) {
    console.log(number2 + " является четным числом.");
} else {
    console.log(number2 + " является нечетным числом.");
}

let name = '' /*если сюда ввести значение, то консоль выведет Hello, " "! */
if (name === '') {
    console.log("Hello, Guest!")
} else {
    console.log("Hello," + name + "!")
}