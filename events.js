const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
    myButton.innerText = 'Я изменилась!'
});

const header = document.getElementById('header');
header.addEventListener('mouseover', function () {
    header.style.transform = 'scale(1.2)'
});
header.addEventListener('mouseout', function () {
    header.style.transform = 'scale(1)'
});

const myInput = document.getElementById('myInput');
myInput.addEventListener('keyup', function (event) {
    console.log('Отпущенная клавиша:' + event.key)
})

const form = document.getElementById('myForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    console.log('Отправлено:', name);

    successMessage.textContent = 'Форма успешно отправлена!';
    successMessage.style.display = 'block';
});

const styleChangeButton = document.getElementById('changeTheme');
const lightTheme = 'Светлая тема';
const darkTreme = 'Темная тема';

styleChangeButton.addEventListener('click', function () {
    if (styleChangeButton.innerText === lightTheme) {
        styleChangeButton.innerText = darkTreme;
    } else (
        styleChangeButton.innerText = lightTheme
    )
});

const body = document.body;
styleChangeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});
