const numbers = [2, 4, 7]
const doubledNumbers =  numbers.map(num => num * 2);

console.log(doubledNumbers)

const user = {
  name: 'Алиса',
  delayGreeting: function() {
    setTimeout(() => {
      console.log(`Привет, ${user.name}!`);
    }, 1000);
  }
};

user.delayGreeting();

const filterArray = (arr, predicateFunc) => {
    const filteredResults = [];
    
    for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        
        if (predicateFunc(currentItem)) {
            filteredResults.push(currentItem);
        }
    }
    return filteredResults;
};


const products = [
    { name: "Молоко", price: 99 },
    { name: "Хлеб", price: 45 },
    { name: "Сыр", price: 250 },
    { name: "Яблоки", price: 120 }
];

const isPriceUnder100 = (product) => product.price < 100;

const affordableProducts = filterArray(products, isPriceUnder100);

console.log("Все продукты:", products);
console.log("Продукты дешевле 100 руб.:", affordableProducts);