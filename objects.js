const person = {
    name: 'Oksana',
    age: 26,
    isEmployed: true,
    hobby: ['drawing', 'snowboarding', 'guitar'],
    favoriteBook: {
        writer: 'Stephen King',
        nameBook: 'The Dark Tower',
        years: 1982 - 2012
    },
    greet: function() {
        console.log('Hello!');
    }
}

console.log(person.name)
console.log(person.hobby)

console.log(person['greet'])

console.log(person.favoriteBook['writer'])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for (let key in person) {
    console.log(`${key} : ${person[key]}`)
}

person.city = 'Ufa';
person.age = 27;
delete person.greet;

console.log(person)
for (let key in person) {
    console.log(`${key} : ${person[key]}`)
}
console.log(Object.entries(person))