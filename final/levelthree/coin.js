const results = [];
const probability = 0;
const track = document.getElementById('track');
const image = document.getElementById('image');
const probabilityShow = document.getElementById('probability');
let totalEntries = 0;
let heads = 0;
let tails = 0;

function coinFlip(){

    totalEntries ++; 

    let output = Math.round(Math.random() * 1);

    output == 0 ? heads ++ : tails ++;

    results.push({
        id : results.length + 1,
        value: possibilities[output]
    });

    console.log(results);

    showTable();
    showImage(output);
    showProbability();
}

const possibilities = {
    0 : "HEAD",
    1 : "TAIL"
}

function showTable () {
    track.innerHTML = "";
    results.map((each) => {
        let newRow = document.createElement('tr');
        let eachId = document.createElement('td');
        eachId.textContent = each.id;
        let eachValue = document.createElement('td');
        eachValue.textContent = each.value;
        newRow.appendChild(eachId);
        newRow.appendChild(eachValue);
        track.appendChild(newRow);
    })
}

function showImage(output){
    if(output == 1){
        image.src = "./images/coin_down.jpg";
    }else{
        image.src = "./images/coin_up.png";
    }
}
function showProbability(){
    probabilityShow.innerHTML = '';
    let headData = document.createElement('p');
    headData.innerHTML = `Heads Probability: ${heads/ totalEntries}`;
    let tailData = document.createElement('p');
    tailData.innerHTML = `Tail Probability: ${tails / totalEntries}`;
    probabilityShow.appendChild(headData);
    probabilityShow.appendChild(tailData);
}