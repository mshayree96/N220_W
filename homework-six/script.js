document.getElementById('title').textContent = 'DOM Manipulation';

document.getElementById('container').style.backgroundColor = 'lightblue';

var ul = document.querySelector('ul');
var newItem = document.createElement('li');
newItem.textContent = 'Item 7';
ul.appendChild(newItem);

var listItems = document.querySelectorAll('li');
listItems[0].style.color = 'crimson';
listItems[2].style.backgroundColor = 'pink';
listItems[4].style.backgroundColor = 'yellow';

var seventhItem = listItems[6];
seventhItem.style.backgroundColor = 'lightGray';
seventhItem.style.color = 'royalBlue';

var nameItem = document.createElement('li');
nameItem.textContent = 'Maisha Shayree'; 

ul.removeChild(listItems[3]);

var button = document.getElementById('btn');
var italicElement = document.createElement('i');
italicElement.textContent = 'Click Me';
button.innerHTML = '';
button.appendChild(italicElement);
button.style.backgroundColor = 'rebeccapurple';
button.style.color = 'white';
button.style.border = '1px solid white';
