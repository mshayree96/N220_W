

function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

var myList = document.querySelector("#codeBox ul");
var codeBoxList = document.querySelector("#codeBox ul");
var addBtn = document.getElementById('addBtn');

var listItems = document.querySelectorAll('#codeBox li');
var totalItems = listItems.length;

for (var n = 0; n < totalItems; n++) {
    var icon = document.createElement('img');
    icon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    icon.className = 'listIcon';
    listItems[n].appendChild(icon);
}


addBtn.addEventListener('click', addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);

    var icon = document.createElement('img');
    icon.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    icon.className = 'listIcon';

    newLI.appendChild(icon);
    newLI.appendChild(newLIText);
    myList.appendChild(newLI);
}


codeBoxList.addEventListener('click', changeProp, false);

function changeProp(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;

    if (tParent.tagName === 'LI') {
        tParent.remove();
    } else if (tParent === codeBoxList) {
        tParent.classList.add('selected');
    }
}


codeBoxList.addEventListener('dblclick', reinstateItem, false);

function reinstateItem(e) {
    var target = getTarget(e);

    if (target.tagName === 'LI' && target.classList.contains('selected')) {
        target.classList.remove('selected');
    }
}
