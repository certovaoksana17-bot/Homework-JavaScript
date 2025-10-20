const myCity = document.getElementById('city')
console.log(myCity.innerHTML)

document.getElementById('city').textContent = 'Новосибирск'
console.log(myCity.innerHTML)

const redItems = document.querySelector('.items');

redItems.style.color = 'red';
redItems.style.backgroundColor = 'blue';
console.log(redItems.innerHTML)

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Новый созданный параграф';
document.body.appendChild(newParagraph);
console.log(newParagraph)


function removeElementById(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        element.remove();
    } else {
        console.warn(`Элемент с ID "${elementId}" не найден.`);
    }
}
removeElementById("city"); 

const link = document.querySelector('a');
link.setAttribute('href', 'https://www.yandex.ru');
console.log(link.setAttribute('href', 'https://www.yandex.ru'));


const newElement = document.createElement('div');
newElement.textContent = 'Новый созданный элемент';
document.body.appendChild(newElement)
console.log(newElement)

newElement.classList.add('new-class');
console.log(newElement.innerHTML)

const colors = document.getElementById('main');
colors.classList.toggle('pink')
console.log(colors)