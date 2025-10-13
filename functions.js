function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome('А роза упала на лапу Азора'));

function findShortestWord(sentance) {
    const words = sentance.split(/\s+/)
    let shortestWord = words[0]
    for (let i = 1; i < words.length; ++i) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i]
        }
    }
    return shortestWord
}

const mySentence = 'Моя мама хорошо готовит'
const shortest = findShortestWord(mySentence)
console.log(shortest)


function formatPhone(phone) {
    if (phone.length === 10) {
        const countryCode = '8'
        const operatorCode = phone.slice(0, 3);
        const triade = phone.slice(3, 6);
        const pair1 = phone.slice(6, 8);
        const pair2 = phone.slice(8, 11);
        return countryCode + "(" + operatorCode + ")" + triade + "-" + pair1 + "-" + pair2;
    }
}
const myValue = '9993334455'
const myNumberPhone = formatPhone(myValue)
console.log(myNumberPhone)

const number = [4, 6, 12, 18, 25, 2]
const result = number.reduce(
    (acc, currentValue) => {
        acc.min = Math.min(acc.min, currentValue)
        acc.max = Math.max(acc.max, currentValue)
        return acc
    },
        { min: number[0], max: number[0] }
)

console.log('Минимальное значение:', result.min)
console.log('Максимальное значение:', result.max)




function BubbleSort(array) {
    let n = array.length
  for (let i = 0; i < n - 1; i++)
  {
    for(j = 0; j < n - 1 - i; j++)
    {
      if(array[j] > array[j + 1])
      {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
let numbers = [3, 12, 10, 1 , 5];
let sortedValue = BubbleSort(numbers)
console.log(sortedValue)