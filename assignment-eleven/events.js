
const oldSchool = () =>{
    document.getElementById('htmlEH').innerHTML = 'HTML Event Handler Clicked!';
};


document.querySelector('input[value="Tranditional Event Handler"]').addEventListener('click', () => {
    document.getElementById('traditional').innerHTML = 'Traditional Event Handler Clicked!';
});


document.querySelector('input[value="DOM Level 2 Event Handler"]').addEventListener('click', () => {
    document.getElementById('level2').innerHTML = 'DOM Level 2 Event Handler Clicked!';
});


window.addEventListener('load', () => {
    document.getElementById('pageURL').innerHTML = `Page URL: ${window.location.href}`;
    document.getElementById('myLastUpdate').innerHTML = `Last Updated: ${document.lastModified}`;
});


const inputField = document.querySelector('input[name="myText"]');
let keyPressCount = 0;

inputField.addEventListener('keydown', () => {
    keyPressCount++;
    document.getElementById('pressNumber').innerHTML = `Key pressed ${keyPressCount} times.`;
});


const dangerText = document.getElementById('danger');
dangerText.addEventListener('dblclick', () => {
    dangerText.innerHTML = '<b>Text changed after double click!</b>';
});

const blurInput = document.querySelector('.blurText');
blurInput.addEventListener('blur', () => {
    blurInput.value = blurInput.value.toUpperCase();
});


const selectElement = document.getElementById('js');
const selectText = document.getElementById('selectText');

selectElement.addEventListener('change', () => {
    const selectedValue = selectElement.value;
    switch (selectedValue) {
        case 'javascript':
            selectText.innerHTML = 'JavaScript: JavaScript is the base for all of these.';
            break;
        case 'jQuery':
            selectText.innerHTML = 'jQuery: You will learn jQuery this semester.';
            break;
        case 'Angular':
            selectText.innerHTML = 'Angular: You will become familiar with Angular in CME422.';
            break;
        case 'React':
            selectText.innerHTML = 'React: React is very popular.';
            break;
        default:
            selectText.innerHTML = 'Default: What did you choose?';
    }
});


const addItemButton = document.querySelector('button');
const myList = document.getElementById('myList');

addItemButton.addEventListener('click', () => {
    const newItem = prompt('Enter a new item:');
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        myList.appendChild(li);
    }
});