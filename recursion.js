function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const firstElement = arr[0];
    const remainingElements = arr.slice(1);
    return firstElement + sumArray(remainingElements);
}

function biggestNumber(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const maxOfRest = biggestNumber(arr.slice(1));
    if (arr[0] > maxOfRest) {
        return arr[0];
    } else {
        return maxOfRest;
    }
}
 const arr = [10, 40, 30, 50]
 console.log(sumArray(arr))
 console.log(biggestNumber(arr))

 function createFibonacci() {
    const cache = { 0: 0, 1: 1 };

    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

const fibonacci = createFibonacci();

console.log(fibonacci(10));