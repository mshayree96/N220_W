function oldschool(){
    document.getElementById('htmlEH').innerHTML="This is bad practisr do not use thi one";
}

function tradText(){
    document.getElementById('traditional').innerHTML="You can only attach one function to this event.";
} 
let tradHandler = document.getElementByTagName('input')
{1};

tradHandler.onclick=tradText;


function level2Text(){
    document.getElementById('level2').innerHTML="Use this. You can attach multiple functions to an event";
}

function alertMe(){
    alert("This is part of the level 2 funcationality");
}
let level2Btn=documnet.getElementById('input')
{2};
level2Btn.addEventListerner('click', function(){
    level2Text();
    alertMe();
});
//UI events

let pURL=document.getElementById('pageURL');
let Update=document.getElementById('myLastUpdate');

function displayInfo(){
    pURL.innerHTML=window.location;
    Update.innerHTML = "LastUpdate" + document.lastModified;
}

window.addEventListener('load',displayInfo);

//Keyboard events

let keyNum=documnet.getElementById('pressNumber');
let keyInput=documnet.getElementByIdTagName('input')[3];
let pressCount=0;
function countKey(){
    pressCount++;
    keyNum.innerHTML= "You have pressed a key"+pressCount+ "times";

}
keyInput.addEventListener('keyPress',countKey);

//Mouse Events
let dangerTxt=document.getElementById('danger');

function changeDanger(){
    dangerTxt.innerHTML= "<br>YOu Changed the Text. Wat to go!</br>";

}
dangerTxt.addEventListener('dbclick',changeDanger);

//focus events
let blurText= documnt.getElementsByClassName('blurText')[0];

function change2Upper(){
    blurText.style.textTransforms="uppercase";
}

blurText.addEventListener('blur',change2Upper);

//Form events
let dropD=document.getElementById('js');
let selectOutput= document.getElementById('selectText');

function ddChoice(){
    let yourChoice =dropD.options[dropD.selectedIndex].value;
    let choiceText;
    switch(yourChoice){
        case"javascript":
        choiceText="javascript is the base of all of these";
        break;
        case "jQuery":
            choiceText="You will learn jQuary"
            break;
        case "Angular":
            choiceText="You amy or may not learn ANgular in an IUPUI course";
            break;
        case "React":
            choiceText="React is very popular";
            break;
        default:
            choiceText="what did you choose";
            break;

    }

    selectOutput.innerHTML= choiceText;
}
 dropD.addEventListerner('change',ddChoice);

 //add/delete list
let myList = document.getElementById('myList');

function addItem(){
    let newItem =prompt("Enter Item");
    let newLi=document.createElement('li');
    let newText= document.createTextNode(newItem);
    newLi.appendChild(newText);
    myList.appendChild(newLi);

}
documnet .getElementByTagName('button')[0]
addEventListener('click', addItem);
function getTarget(e){
    //get the target element of an event
    if(!e){
        e=window.event;


    }

    return e.target || e.srcElement;

}

function deleteItem(e) {
    let target =getTarget(e);
    
    let tParent= target.parentNode;
    tParent.removeChild(target);

}
myList.addEventListener('click', deleteItem);









































