/*let number = -18;
if (number > 0) {
    console.log("Число положительное");
} else if (number < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}

let number1 = 12;
if (number1 > 0) {
    console.log("Число положительное");
} else if (number1 < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}

let number2 = 0;
if (number2 > 0) {
    console.log("Число положительное");
} else if (number2 < 0) {
    console.log("Число отрицательное");
} else {
    console.log("Число равно нулю");
}*/

/*let height = prompt('Какой у вас рост?')
let weight = prompt('Какой у вас вес?')
let BMI = 100(weight / (((height / 100) ** 2)))
if (Number(BMI) <= 16) {
    alert('Выраженный дефицит массы тела')
} else if (Number(BMI) <= 18.5) {
    alert('Недостаточная масса тела')
} else if (Number(BMI) <= 25) {
    alert('Норма')
} else if (Number(BMI) <= 30) {
    alert('Избыточная масса тела')
} else if (Number(BMI)) {
    alert('Ожирение')
} */

alert('Хочешь узнать, когда у тебя будет отпуск? :)')
const month = prompt('Загадай число от 1 до 12')
let monthName;

switch (month) {
    case '1':
        monthName = 'Январь';
        break;
    case '2':
        monthName = 'Февраль';
        break;
    case '3':
        monthName = 'Март';
        break;
    case '4':
        monthName = 'Апрель';
        break;
    case '5':
        monthName = 'Май';
        break;
    case '6':
        monthName = 'Июнь';
        break;
    case '7':
        monthName = 'Июль';
        break;
    case '8':
        monthName = 'Август';
        break;
    case '9':
        monthName = 'Сентябрь';
        break;
    case '10':
        monthName = 'Октябрь';
        break;
    case '11':
        monthName = 'Ноябрь';
        break;
    case '12':
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Не будет у тебя отпуска!';
}

alert(monthName);

let titlePredictions = alert('А это печеньки с предсказаниями :)')
const prediction = prompt('Загадай число от 1 до 14')
let predictionName;

switch (prediction) {
    case '1':
        predictionName = 'Немного терпения и желания сбудутся!';
        break;
    case '2':
        predictionName = 'Не бойтесь новой работы!';
        break;
    case '3':
        predictionName = 'Результат ваших стараний не разочарует!';
        break;
    case '4':
        predictionName = 'Ничего не помешает достигнуть цели!';
        break;
    case '5':
        predictionName = 'Год полон приятных сюрпризов!';
        break;
    case '6':
        predictionName = 'Никогда не забывайте о себе!';
        break;
    case '7':
        predictionName = 'Вы не узнаете, если не постараетесь!';
        break;
    case '8':
        predictionName = 'Любая ваша идея имеет ценность!';
        break;
    case '9':
        predictionName = 'Вы сможете себе позволить что угодно!';
        break;
    case '10':
        predictionName = 'Всему свое время - просто подождите!';
        break;
    case '11':
        predictionName = 'Счастье не за горами!';
        break;
    case '12':
        predictionName = 'Не сидите на месте!';
        break;
    case '13':
        predictionName = 'Личная жизнь будет только радовать!';
        break;
    case '14':
        predictionName = 'Путешествия избавят от всех забот!';
        break;
    default:
        predictionName = 'Попробуй еще раз! :(';
}

alert(predictionName); 