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

function deepCopy(obj) {
    //проверяем не является ли входное значение null
    //проверяем является ли obj примитивом
    //это проверка нужна чтобы убедится в том, что входное значение является 
    // массивом или обьектом, который нужно глубоко клонировать
    if (obj === null || typeof obj !== 'object') {
        //после проверки если обьект явлется обьектом, то возвращаем
        return obj;
    }
    //ниже происходит подготовка контейнера для клонирования
    //
    const copy = Array.isArray(obj) ? [] : {};
    // создаем новую константу copy в которую будем сохранять результат копирования
    //Array.isArray() это метод который специально проверяет значение на обьект(массив)
    //чтобы определить точный тип структуры
    //c помощью тенарного оператора создается пустая оболочка для массива
    // (если это массив) и для обьекта(если это обьект)

    //дальше проходит интерация и вызов рекурсивной функции
    
    for (let key in obj) { //здесь мы перебираем все ключи обьекта или массива
        if (obj.hasOwnProperty(key)) { //метод hasOwnProperty(key) проверяет 
        // если свойство найдено в обьекте(массиве), которое точно присутствует или
        //  не унаследовано
            copy[key] = deepCopy(obj[key]);//здесь мы обращаемся к значению свойства
            //  obj[key] и вызываем снова функцию deepCopy, но уже с новым вложенным
            //  значениемБ, это нужно чтобы создать новую независимую копию и в
            //  пустую оболочку copy[key] и к ней присваиваем значение новой копии
        }
    }
    return copy;//здесь возвращаем сделаную копию обьекта(массива)
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3;
//тут проверяем ее в деле
console.log(original.b.c); // 2