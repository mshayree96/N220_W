var aText = document.getElementById('answers');

let grades=[78,86,92,77];

aText.innerHTML= "Array:" + grades;
aText.innerHTML+="<br/>Second Value:"+ grades[1];S
grades[1]=83;
aText.innerHTML += "<br/>Array:" + grades;
aText.innerHTML += "<br/>Array Length:" + grades.length;
let lastGrade = grades.length-1; //3
let lgValue = ++grades[lastGrade];
aText.innerHTML += "<br/>Last Grade Change:" + lgValue;
aText.innerHTML += "<br/>Array:" + grades;

let gradeTotal = grades[0]+grades[1]+grades[2]+grades[3];
aText.innerHTML+= "<br/> Array AVerage:" + (gradeTotal/grades.length);

aText.innerHTML+= "<br/> Above AVerage:" + (gradeTotal/grades.length)>80;

//lab extras

let tops=['tshirts','sweater','sweatshirt','blouse', 'button-down', 'hoodie'];

let exText = document.getElementById('extraAnswers');

tops.push('tank'); // add new value to the array
exText.innerHTML = "Array Push:" +tops;

//remove last value

tops.pop();
exText.innerHTML+="<br/>Array Pop: "+ tops;

//Remove first value

tops.shift();
exText.innerHTML+="<br/> ArrayShift:" + tops;

//Add value at begginning
tops.unshift();
exText.innerHTML+="<br/> Array Unshift:" + tops;


//Add/ Delete
tops.splice(2,1);
exText.innerHTML+="<br/> delete sweatshirt:" + tops;


tops.splice(3,0,"sweatshirt", "tank");
exText.innerHTML+="<br/> add sweatshirt:" + tops;


let bottoms= ['jeans','shorts','skirts', 'slacks', 'sweatpants'];
let outfits=[tops, bottoms];
document.write(outfits[0][1] + "" + outfits[1][3]);

//Objects

const friend = {
    fName:"William",
    lName:"WIsconsin",
    age:27,
    student:false,
    fullName:function(){
        return  this.fName + "" + this.lName;

    }
}

console.log(friend.fullName()+"is"+ friend.age+"years old.");






















