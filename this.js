const person = {
    name: 'Elena',
    age: 27,
    greet: function () {
        console.log(`Hello ${this.name} I'm ${this.age}`)
    }
}
person.greet()

const person2 = {
    name: 'Pavel',
    age: 23
}
person.greet.call(person2)
//мы вызвали метод call(), который вызвал функцию со значение this, и он 
// поменял свойства из др обьекта

const student = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(this.greet, 1000);
    console.log(this)
  }
};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined 

//когда мы вызываем student.delayedGreet(), внутри delayedGreet, 
// this корректно указывает на объект student
// выражение this.greet возвращает саму функцию greet
//но она вызывает ее как обычную функцию, а не как метод объекта student.
//в момент этого обычного вызова контекст this теряется и становится глобальным объектом
//this.name пытается прочитать свойство name у глобального объекта, которого там нет, поэтому
//  результат — undefined

function introduce (greeting, time) {
  const name = this.name || 'Анонимный';
  const job = this.job || 'Безработный'
  console.log(`${greeting}! Меня зовут ${name}, и я работаю как ${job}. Сейчас ${time}.`)
}

const somePerson1 = {
  name: 'Ольга',
  job: 'Повар'
}
const somePerson2 = {
  name: 'Анатолий',
  job: 'Разработчик'
}
const somePerson3 = {
  name: 'Динар'
}
introduce.call(somePerson1, 'Здравствуйте', 'утро')
introduce.call(somePerson3, 'Привет', 'день')
const argForAnatoly = ['Добрый вечер', 'вечер']
introduce.apply(somePerson2, argForAnatoly)
const introduceOlga = introduce.bind(somePerson1, 'Йоу', 'ночь');
introduceOlga()



function sayHello() {
    console.log('Hello, ' + this.name)
}

const admin = {
    name: 'Bob'
};

const user = {
    name: 'John'
};
/*const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin()

const sayHelloToUser = sayHelloToAdmin.bind(user)
sayHelloToUser()*/


//метод bind() создает привязку только один раз
// поэтому когда мы делаем const sayHelloToAdmin = sayHello.bind(admin), 
// мы создаеем новую функцию sayHelloToAdmin.
//внутри этой новой функции контекст this навсегда зафиксирован как объект 
// admin ({ name: 'Bob' }).
//когда мы пытаемся привязать эту уже привязанную функцию sayHelloToAdmin к другому
//  контексту (user) с помощью sayHelloToUser = sayHelloToAdmin.bind(user), 
// JavaScript игнорирует вторую попытку привязки.

//Чтобы получить желаемый результат (Hello, John), нам нужно использовать 
// оригинальную функцию sayHello для обеих привязок:

const sayHelloToAdmin = sayHello.bind(admin); 
sayHelloToAdmin(); 

const sayHelloToUser = sayHello.bind(user); 
sayHelloToUser(); 