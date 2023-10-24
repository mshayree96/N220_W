let bank= 45.67;
let toy= 45.99;
let buytoy= bank>toy //true/false

if(buytoy){
    document.getElementById('bank').innerHTML = "lets go buy it!";


    

}else {
    document.getElementById('bank').innerHTML = "lets go buy it!";
}

//birthday month

let today = new Date();
let thisMonth = today.getMonth()+1;
if (thisMonth==10){
    document.getElementById('birthday').innerHTML = "Have a great birthday Month!";


} else{ document.getElementById('birthday').innerHTML = "No party this month!";
}

function checkAge(){
    let myAge=document.getElementById('age').value;

    let ageText;

    if (myAge<18){
        ageText = "Sorry You Can not vote.";
    } else if(myAge=18){
        ageText ="You can Finally Vote! :) "
    }else{
        ageText = "Congrats ------ You can vote!!!!!"
    }
    document.getElementById('VoteAge').innerHTML=ageText;
}

//greeting

let tHours=today.getHours();
let greeting;

if (tHours<=12){
    greeting ="Good Morning";
} else if (myHours>12 && myHours<=16){
    greeting = "Good Afternoon!";

} else if (myHours >16 && myHours<=20){
    greeting = "Good Evening!";
}else {
    greeting = "Good Night!";
}
document.getElementById('myTime').innerHTML = greeting;

//grades
let midterm= 78;
let final= 87;


let total= midterm+final+47+62; //for second condition
let myAvg=(total/350)*100;


var studentText;

if(midterm>50 &&final >72){
    studentText = "You Passed the class";


}else {
    studentText="You did not pass the class";
}

//second condition 

if((midterm>50 &&final >72) || myAvg>80){
    studentText += "<br/>The class is complete.";
}else{
    studentText="<br/>The class is not complete";
}

document.getElementById('msg').innerHTML=studentText;


//random number

function newNum() {
    let rNum = Math.floor(Math.random()*20)+1;
    document.getElementById('rNum20').innerHTML= rNum;
}


//dice problem

function rollDie(){
    var dieImage='';
    let rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage= "die_face_1.png";
            break;
        case 2:
            dieImage= "die_face_2.png";
            break;
        case 3:
            dieImage= "die_face_2.png";
            break;

        case 2:
            dieImage= "die_face_3.png";
            break;

        case 4:
            dieImage= "die_face_4.png";
            break;
        case 5:
            dieImage= "die_face_5.png";
            break;
        case 6:
            dieImage= "die_face_6.png";
            break;
         default:
            console.log("Something went wrong");
            break;



    }
    document.getElementById('dice_1').innerHTML = '<img src="images/'+dieImage+ '"/>';

    rNum = Math.floor(Math.random()*6)+1;
    switch(rNum){
        case 1:
            dieImage= "die_face_1.png";
            break;
        case 2:
            dieImage= "die_face_2.png";
            break;
        case 3:
            dieImage= "die_face_2.png";
            break;

        case 2:
            dieImage= "die_face_3.png";
            break;

        case 4:
            dieImage= "die_face_4.png";
            break;
        case 5:
            dieImage= "die_face_5.png";
            break;
        case 6:
            dieImage= "die_face_6.png";
            break;
         default:
            console.log("Something went wrong");
            break;



    }
    document.getElementById('dice_2').innerHTML = '<img src="images/'+dieImage+ '"/>';

    
}

//Seasons of the year
//thisMonth holds this month
var seasonsText;
switch(true){
    case(thisMonth==12 || thisMonth <=2):
    seasonsText= "Its winter!"
    break;

    case(thisMonth>=3 && thisMonth<=5):
    seasonsText= "It's Spring!";
    break;

    case(thisMonth>=6 && thisMonth<=8):
    seasonsText= "It's Summer!";
    break;

    case(thisMonth>=9 && thisMonth<=11):
    seasonsText= "It's Fall!";
    break;

    default:
        seasonsText = "That is not an options";




}

documnet.getElementById('season').innerHTML=seasonText










