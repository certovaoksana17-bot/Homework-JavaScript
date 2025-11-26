const student = {
    name: 'Roxana',
    age: 17,
    isMarrid: false,
    address: {
        city: 'Ufa',
        street: 'Lenin'
    },
    favoriteSports: [
        'rideABike',
        'snowbording',
        'run'
    ],
    favoriteBooks: [
        {StevenKing: 'Dark Town'},
        {Pushkin: 'Eugene Onegin'}
    ]
}
const shallowCopyStudent1 = {...student}
//здесь мы скопировали через spread копию у оригинала

shallowCopyStudent1.name = 'Valera';
shallowCopyStudent1.address.city = 'Moscow';
shallowCopyStudent1.favoriteBooks.StevenKing = 'deadAnimalCemetery';
console.log(shallowCopyStudent1)
console.log(student)
//здесь поменяли некоторые значения у копии
//и вывесли в консоль
//мы видим что поверхностые значения меняются в копированном студенте
//а когда касается вложенных массивов или обьектов, то меняется и в оригинале
//тоже самое копирование сделаем с функцией Object.assign()


const shallowCopyStudent2 = Object.assign({}, student)
shallowCopyStudent2.name = 'Alex';
shallowCopyStudent2.address.street = 'Kirova';
console.log(shallowCopyStudent2)
console.log(student)

//мы видим тот же эффект, имя поменялось, а то, что поменяли в вложенном обьекте, 
// поменялось и в оригинале

const user = {
    name: "Alice",
    age: 30,
    address: {
       city: "Wonderland",
       zip: "12345"
    },
    sayHi: () => console.log('Hello, Alice!')
};

const deepCopyUser = JSON.parse(JSON.stringify(user));
console.log(deepCopyUser)
//когда я скопировала обьект, то в консоли все скопировалось кроме функции
//потому что метод JSON имеет ограничения
//он не копирует функции и символы