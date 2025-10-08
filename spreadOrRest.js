function calculateAverage(...numbers) {
const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  const average = sum / numbers.length;
  return average;
}

const myValue = calculateAverage(6, 7, 8, 9, 10);
console.log(myValue);

function printUser({ name, age, country}) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}
const user = { name: 'Mary', age: 25, country: 'Russia' };
printUser(user);

const person = {
    name: 'John',
    surname: 'Vakovsky',
    address: {
        city: 'Moscow',
        street: 'Vologda',
        number: 32,
    },
    profession: 'Writer',
    books: ['Blue sky', ['Yellow sun'], 'Red apple']
}
const {name, surname, address: {city, street, number}, profession, books: [a, [b], c]} = person
console.log(name)
console.log(city)
console.log(street, number)
console.log(b)

const fruits = ['Apple', 'Watermelon', 'Cherry']
const startFruits = 'Peach'
const finishFruits = 'Pear'
const newArray = [
    startFruits,
    ...fruits,
    finishFruits
]

console.log(newArray)


function deletObject(obj, deleteObj) {
    const { [deleteObj]: removed, ...rest } = obj
    return rest
}

const myUser = {
    name: 'Маша',
    age: 25,
    profession: 'Визажист' 
}

const newUser = deletObject(myUser, 'age')
console.log(newUser)