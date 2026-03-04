const user = {}

Object.defineProperty(user, 'name', {
    value:'Алексей',
    writable: false,
    configurable: false,
    enumerable: true
})

Object.defineProperty(user, 'id', {
    value: 777,
    writable: false,
    configurable: false,
    enumerable: true
})

console.log('До попытки изменения:', user)

user.name = 'Дмитрий'
delete user.id

console.log('После попытки измененияЖ:', user)



const car = {
    brand: 'Tesla',
    model: 'Model S'
}

Object.defineProperty(car, 'serialNumber', {
    value: 'ABC-123-XYZ',
    enumerable: false,
    writable: true,
    configurable: true
})

console.log('Прямой доступ к свойству:', car.serialNumber)

console.log('Перебор через цикл for...in:')
for (let key in car) {
    console.log(key)
}

console.log('Список ключей через Object.keys:')
console.log(Object.keys(car))