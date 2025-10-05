const numbers = [11, 12, 13, 14, 15]
const degree = numbers.map(num => num * 2)
console.log(numbers)
console.log(degree)

const numbers1 = [10, 5, 5, 6, 7, 6, 7, 1, 12, 0, 1,]
const unique = [...new Set(numbers1)]
console.log(unique) 

const numbers2 = [5, 10, 15, 5]
const addition = numbers2.reduce((total, num) => total + num, 0)
console.log(addition)

/*первый вариант*/
const numbers3 = [1, 2, 3, 4, 5]
const conversely = []
numbers3.forEach(element => {
conversely.unshift(element)
})
console.log(conversely)

/*второй вариант*/
const numbers4 = [1, 2, 3, 4, 5]
const conversely1 = []
for (let i = numbers4.length - 1; i >= 0; --i) {
conversely1.push(numbers4[i])
}
console.log(conversely1)

const name = 'Pasha'
let name1 = 'Masha'

console.log(name)
console.log(name1)
/*создала переменные и вывела их в консоль*/
/*name = 'Dasha'*/
name1 = 'Tanya'

console.log(name)
console.log(name1)
/*попыталась переопределить значения с const консоль выдала ошибку(поэтому я его закинула в комментарии)
/*let переопределилось на другое значение. Так случилось потому что это особенность каждой*/

const fruits = ['Apple', 'Banana', 'Watermelon']
let books = [1, 2, 3, 4, 5]

console.log(fruits)
console.log(books)
/*создала 2 массива и вывела их в консоль*/

fruits.push('Grape')
console.log(fruits)
/*добавила значение в помощью push в конец массива и вывела в консоль*/

fruits.shift()
console.log(fruits)
/*теперь удалила значение с индексом 0 с помощью shift*/

books.unshift(10)
console.log(books)
/*добавила значение в начале массива с помощью unshift*/

books.pop()
console.log(books)
/*удалила последнее значение массива*/

fruits.splice(1, 2, 'Lemon', 'Cherry')
console.log(fruits)
/*с помощью splice удалила значения массива под индексом 1 и 2, и заменила на другие значения*/