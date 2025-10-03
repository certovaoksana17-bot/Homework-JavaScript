for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let value = 0;
let i = 1;

while (i <= 100) {
  value += i;
  i++;
}
console.log("Сумма чисел от 1 до 100: " + value)

function primeNumber() {
  for (let num = 0; num <= 100; num++) {
    if (num < 2) {
      continue;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

primeNumber();