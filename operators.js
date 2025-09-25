const x = 2
console.log(x * x + x)

const sinValue = Math.sin(54)
const cosValue = Math.cos(16)
const roundedNum = Math.round(sinValue * cosValue)** 2
console.log(roundedNum)

const sqrtValue = Math.sqrt(13.2 * 71.90)
const fractionValue = 2.4 / (7 ** 4)
const sqrtvalue = Math.sqrt(49)
const roundedNumber = Math.round(16 * sqrtValue / fractionValue + 3 ** sqrtvalue) * 2 ** 7
console.log(roundedNumber)

const isNum = (num) => num % 2 === 0;
let number = 51
let Number = 82
if (isNum(number)) {
    console.log(number + " является четным числом.");
} else {
    console.log(number + " является нечетным числом.");
}
if (isNum(Number)) {
    console.log(Number + " является четным числом.");
} else {
    console.log(Number + " является нечетным числом.");
}

let name = '' /*если сюда ввести значение, то консоль выведет Hello, " "! */
if (name === '') {
    console.log("Hello, Guest!")
} else {
    console.log("Hello," + name + "!")
}