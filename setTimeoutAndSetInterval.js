function startCountdown(seconds) {
    if (seconds <= 0) {
        console.log('Время вышло!');
        return;
    }


    console.log(`Осталось : ${seconds} секунд`);

    setTimeout(() => {
        startCountdown(seconds - 1)
    }, 1000)
}
startCountdown(5)

function reminder() {
    const intervalTime = 30 * 60 * 1000;
    console.log('Напоминание: нужно выпить воду каждые 30 минут!')

    const timerId = setInterval(() => {
        const currentTime = new Date().toLocaleString();
        console.log(`${currentTime}: Напоминание: нужно выпить воду!`);
    }, intervalTime)

    return timerId;
}

reminder()


let timerId = null;

const delayInput = document.getElementById('delayInput');
const actionBtn = document.getElementById('actionBtn');
const textInput = document.getElementById('textInput');

actionBtn.addEventListener('click', () => {
    if (timerId !== null) {
        stopProcess()
    } else {
        startProcess()
    }
})

function startProcess() {
    let delay = parseInt(delayInput.value);
    if (isNaN(delay) || delay < 100) {
        alert('Минимальная задержка - 100мс');
        delay = 1000;
        delayInput.value = 1000;
    }
    actionBtn.textContent = 'Стоп';
    timerId = setInterval(() => {
        console.log(textInput.value || 'Текст не введен')
    }, delay)
}

function stopProcess() {
    clearInterval(timerId);
    timerId = null;
    actionBtn.textContent = 'Начать';
}