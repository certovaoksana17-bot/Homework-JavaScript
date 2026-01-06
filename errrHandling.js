function safeDivide(a, b) {
    try {
        if(b === 0) {
            throw new Error('Деление на ноль невозможно')
        }
        return a / b
    } catch (e) {
        console.log('Произошла ошибка:', e.message)
    }
}

console.log(safeDivide(10, 2))
console.log(safeDivide(10, 0))

function transfromJSON (jsonString) {
    try {
        const obj = JSON.parse(jsonString)
        return obj
    } catch (e) {
        console.log('Произошла ошибка:', e.message)
    }
}

const validData = '{"name": "Alice", "role": "admin"}';
console.log(transfromJSON(validData));

const invalidData = '{name: Alice, "age": 25}'; 
console.log(transfromJSON(invalidData));

function checkAccess (age) {
    try {
        if(age < 18) {
        throw new Error ('Доступ запрещен')
    }
    return true
    } catch (e) {
        console.log('Произошла ошибка:', e.message)
    }
}

console.log(checkAccess(17))
console.log(checkAccess(19))