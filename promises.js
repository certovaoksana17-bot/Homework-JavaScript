function getUserData() {
    return new Promise((resolve) => {
        console.log('Загрузка данных...');
        setTimeout(() => {
            resolve({id: 1, name: 'Admin', role: 'moderator'});
        }, 2000)
    });
}

getUserData()
.then((user) => {
    console.log('Данные получены:', user);
    return user.name;
})
.then((userName) => {
    const upperName = userName.toUpperCase();
    return `Привет, ${upperName}!`;
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log('Произошла ошибка:', error)
})




function getFastData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Результат 3 сек"), 3000);
  });
}

function getSlowData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Результат 5 сек"), 5000);
  });
}
Promise.all([getFastData(), getSlowData()])
  .then((results) => {
    console.log("Оба промиса выполнены:");
    console.log("1-й:", results[0]);
    console.log("2-й:", results[1]);
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });




  const getRandomPromise = (name) => {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Победил ${name} (задержка: ${delay}мс)`);
    }, delay);
  });
};

const promise1 = getRandomPromise("Промис №1");
const promise2 = getRandomPromise("Промис №2");

Promise.race([promise1, promise2])
  .then((winner) => {
    console.log("Результат гонки:", winner);
  })
  .catch((err) => console.error("Ошибка:", err));