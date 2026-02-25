/*"use strict"

function addNumbers(a, b) {
    result = a + b
    return result
}*/

console.log(addNumbers(5, 10))

"use strict"

function addNumbers(a, b) {
    const result = a + b
    return result
}

/*"use strict"

function multiply(num, num) {
    return num * num
}*/

console.log(multiply(5, 10))

"use strict"
function multiply(a, b) {
    return a * b
}

(function () {
    "use strict"
    function showThis() {
        console.log(this)
    }

    showThis()
})()
    //Если ф-ция вызывается не как метод обьекта, this автоматически ссылается на глобальный обьект
    //при строгом режиме, js запрещает автоматическую привязку к глобальному обьекту, если контекст не задан, this будет равен undefind

    (function () {
        "use strict"

        const myObject = {}

        try {
            delete Object.prototype.toString
        } catch (error) {
            console.error('Ошибкапри удалении:', error.message)
        }

        console.log('Метод toString все еще на месте:', typeof myObject.toString)
    })()
//Чтобы избежать ошибки в строгом режиме, не используйте delete на свойствах, которые вы сами не создавали