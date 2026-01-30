const delay = ms => {
    return new Promise(r => setTimeout(r, ms))
}
async function runDelay(time) {
    console.log('Ожидание началось...')
    await delay(time)
    console.log('Задержка завершена')
}
runDelay(2000)



async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }

        const userData = await response.json();
        
        return userData;
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchUserData(1).then(user => {
    console.log(`Пользователь: ${user.name}, живет в городе: ${user.address.city}`);
});