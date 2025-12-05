function createGreeter(greetingStyle) {
  const prefix = greetingStyle;

  return function greetUser(userName) {
    console.log(`${prefix}, ${userName}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

sayHello("Алиса"); 
sayHi("Борис");  
sayHello("Чарли");  



const globalVariable = "Глобальный уровень";

function outerFunction(outerParam) {
  const outerVariable = "Уровень 1 (Внешний)";
  console.log(`[Outer] Имеет доступ к: ${globalVariable}`);

  function middleFunction(middleParam) {
    const middleVariable = "Уровень 2 (Средний)";
    console.log(`[Middle] Имеет доступ к: ${globalVariable}, ${outerVariable}, ${outerParam}`);

    function innerFunction(innerParam) {
      const innerVariable = "Уровень 3 (Внутренний)";
      console.log(`[Inner] Имеет доступ к: ${globalVariable}, ${outerVariable},
         ${outerParam}, ${middleVariable}, ${middleParam}, ${innerVariable}, ${innerParam}`);
    }
    return innerFunction;
  }
  return middleFunction;
}

const getMiddle = outerFunction("Параметр A");

const getInner = getMiddle("Параметр B");

getInner("Параметр C");
